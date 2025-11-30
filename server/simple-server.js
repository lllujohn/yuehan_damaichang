const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 3001;

// 中间件
app.use(cors());
app.use(express.json());

// 数据文件路径
const DATA_DIR = path.join(__dirname, 'data');
const PRODUCTS_FILE = path.join(DATA_DIR, 'products.json');
const USERS_FILE = path.join(DATA_DIR, 'users.json');

// 初始化数据目录
async function initDataDir() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    
    // 初始化商品数据
    try {
      await fs.access(PRODUCTS_FILE);
    } catch {
      const initialProducts = [
        {
          id: 1,
          title: 'iPhone 13 Pro 256GB',
          price: 4999,
          originalPrice: 8999,
          image: 'https://images.unsplash.com/photo-1592286927505-2fd3364fb367?w=500',
          condition: '9成新',
          seller: '张同学',
          sellerId: 1,
          location: '图书馆',
          views: 234,
          description: '个人自用，无磕碰，功能完好，配件齐全',
          categoryId: 1,
          status: 'available',
          createdAt: new Date().toISOString()
        },
        {
          id: 2,
          title: '精装书籍合集',
          price: 89,
          originalPrice: 180,
          image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500',
          condition: '95新',
          seller: '李同学',
          sellerId: 2,
          location: '东区宿舍',
          views: 156,
          description: '各类经典书籍，保存完好',
          categoryId: 2,
          status: 'available',
          createdAt: new Date().toISOString()
        },
        {
          id: 3,
          title: 'MacBook Pro 笔记本',
          price: 5999,
          originalPrice: 9999,
          image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500',
          condition: '95新',
          seller: '王同学',
          sellerId: 3,
          location: '创业园',
          views: 567,
          description: 'M1芯片，性能强劲，适合编程设计',
          categoryId: 1,
          status: 'available',
          createdAt: new Date().toISOString()
        }
      ];
      await fs.writeFile(PRODUCTS_FILE, JSON.stringify(initialProducts, null, 2));
    }
    
    // 初始化用户数据
    try {
      await fs.access(USERS_FILE);
    } catch {
      await fs.writeFile(USERS_FILE, JSON.stringify([], null, 2));
    }
  } catch (error) {
    console.error('初始化数据目录失败:', error);
  }
}

// 读取数据
async function readData(file) {
  try {
    const data = await fs.readFile(file, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// 写入数据
async function writeData(file, data) {
  await fs.writeFile(file, JSON.stringify(data, null, 2));
}

// ============= API 路由 =============

// 获取所有商品
app.get('/api/products', async (req, res) => {
  try {
    const products = await readData(PRODUCTS_FILE);
    const { category, search, status = 'available' } = req.query;
    
    let filtered = products.filter(p => p.status === status);
    
    if (category) {
      filtered = filtered.filter(p => p.categoryId === parseInt(category));
    }
    
    if (search) {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(searchLower) ||
        p.description?.toLowerCase().includes(searchLower)
      );
    }
    
    res.json({
      success: true,
      data: filtered,
      total: filtered.length
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// 获取单个商品
app.get('/api/products/:id', async (req, res) => {
  try {
    const products = await readData(PRODUCTS_FILE);
    const product = products.find(p => p.id === parseInt(req.params.id));
    
    if (!product) {
      return res.status(404).json({ success: false, error: '商品不存在' });
    }
    
    // 增加浏览量
    product.views = (product.views || 0) + 1;
    await writeData(PRODUCTS_FILE, products);
    
    res.json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// 发布商品
app.post('/api/products', async (req, res) => {
  try {
    const products = await readData(PRODUCTS_FILE);
    const newProduct = {
      id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
      ...req.body,
      views: 0,
      status: 'available',
      createdAt: new Date().toISOString()
    };
    
    products.push(newProduct);
    await writeData(PRODUCTS_FILE, products);
    
    res.json({ success: true, data: newProduct });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// 更新商品
app.put('/api/products/:id', async (req, res) => {
  try {
    const products = await readData(PRODUCTS_FILE);
    const index = products.findIndex(p => p.id === parseInt(req.params.id));
    
    if (index === -1) {
      return res.status(404).json({ success: false, error: '商品不存在' });
    }
    
    products[index] = { ...products[index], ...req.body, updatedAt: new Date().toISOString() };
    await writeData(PRODUCTS_FILE, products);
    
    res.json({ success: true, data: products[index] });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// 删除商品
app.delete('/api/products/:id', async (req, res) => {
  try {
    const products = await readData(PRODUCTS_FILE);
    const filtered = products.filter(p => p.id !== parseInt(req.params.id));
    
    await writeData(PRODUCTS_FILE, filtered);
    
    res.json({ success: true, message: '删除成功' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// 分类列表
app.get('/api/categories', (req, res) => {
  const categories = [
    { id: 1, name: '电子产品', icon: '📱', count: 234 },
    { id: 2, name: '教材书籍', icon: '📚', count: 156 },
    { id: 3, name: '生活用品', icon: '🏠', count: 89 },
    { id: 4, name: '运动器材', icon: '⚽', count: 67 },
    { id: 5, name: '美妆服饰', icon: '👗', count: 123 },
    { id: 6, name: '其他', icon: '🎁', count: 45 }
  ];
  
  res.json({ success: true, data: categories });
});

// 健康检查
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    message: '简化版后端服务运行正常'
  });
});

// 启动服务器
initDataDir().then(() => {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`
╔═══════════════════════════════════════════════════════╗
║  🚀 约翰大卖场 - 后端服务已启动                        ║
║                                                       ║
║  📍 本地访问: http://localhost:${PORT}                   ║
║  🌐 网络访问: http://10.0.158.177:${PORT}                ║
║  💾 数据存储: JSON 文件 (无需数据库)                   ║
║                                                       ║
║  API 端点:                                            ║
║  - GET    /api/products        获取商品列表           ║
║  - GET    /api/products/:id    获取商品详情           ║
║  - POST   /api/products        发布商品               ║
║  - PUT    /api/products/:id    更新商品               ║
║  - DELETE /api/products/:id    删除商品               ║
║  - GET    /api/categories      获取分类列表           ║
║  - GET    /health              健康检查               ║
╚═══════════════════════════════════════════════════════╝
    `);
  });
});
