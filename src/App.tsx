import { useState } from 'react';
import './App.css';
import './index.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-light">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20cartoon%20cat%20logo%20for%20diary%20app&image_size=square" alt="毛球日记" className="h-10 w-10 rounded-full" />
            <h1 className="ml-3 text-2xl font-bold gradient-text">毛球日记</h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-dark hover:text-primary font-medium">首页</a>
            <a href="#features" className="text-dark hover:text-primary font-medium">功能</a>
            <a href="#download" className="text-dark hover:text-primary font-medium">下载</a>
            <a href="#about" className="text-dark hover:text-primary font-medium">关于我们</a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a href="#home" className="text-dark hover:text-primary font-medium py-2" onClick={() => setIsMenuOpen(false)}>首页</a>
              <a href="#features" className="text-dark hover:text-primary font-medium py-2" onClick={() => setIsMenuOpen(false)}>功能</a>
              <a href="#download" className="text-dark hover:text-primary font-medium py-2" onClick={() => setIsMenuOpen(false)}>下载</a>
              <a href="#about" className="text-dark hover:text-primary font-medium py-2" onClick={() => setIsMenuOpen(false)}>关于我们</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 gradient-bg">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              不写日记，只收藏人生凭证
            </h2>
            <p className="text-white text-lg mb-8">
              毛球日记，是一款专注于票据收藏与成长记录的时光伴侣。
              每一张电影票、车票、门票，都是一段时光的印记。
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#download" className="btn-primary text-center">
                立即下载
              </a>
              <a href="#features" className="bg-white text-dark py-3 px-6 rounded-full font-medium text-center hover:bg-gray-100 transition">
                了解更多
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mobile%20app%20screenshot%20of%20diary%20app%20with%20ticket%20collection%20interface%2C%20colorful%20and%20cute%20design&image_size=portrait_16_9" 
              alt="毛球日记App截图" 
              className="rounded-2xl shadow-2xl max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">核心功能</h2>
          <p className="section-subtitle">
            毛球日记提供多种功能，帮助你记录生活中的每一个美好瞬间
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card p-8">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V19.5a2.25 2.25 0 002.25 2.25h.75m0-3h-3.75m0 0H9m1.5 3h3.75m-3.75 0H9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">票据收藏</h3>
              <p className="text-gray-600">
                每一张电影票、车票、门票，都是一段时光的印记。
                智能识别票据信息，无需手动录入，3秒珍藏一段时光。
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="card p-8">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0 0a11.953 11.953 0 01-8.55 3.438 11.953 11.953 0 01-8.55-3.438m17.1 0A11.954 11.954 0 0012 12.75c-2.998 0-5.74-1.1-7.8-2.918m15.6 0A11.954 11.954 0 0112 12.75c2.998 0 5.74 1.1 7.8 2.918" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">成长记录</h3>
              <p className="text-gray-600">
                记录孩子的成长里程碑、日常点滴、健康记录，
                见证生命的每一步，不再错过第一次。
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="card p-8">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">自定义日记</h3>
              <p className="text-gray-600">
                自由创建专属的日记类型，随心记录独特的每一刻，
                定义你的专属日记风格。
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="card p-8">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">足迹地图</h3>
              <p className="text-gray-600">
                记录你去过的每一个城市，生成专属足迹地图，
                丈量世界的脚步，留下珍贵的旅行回忆。
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="card p-8">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">时光胶囊</h3>
              <p className="text-gray-600">
                埋下一个时光胶囊，给未来的自己写封信，
                记录当下的心情，等待未来开启的惊喜。
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="card p-8">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">AI问答</h3>
              <p className="text-gray-600">
                你的专属时光助手，问它任何关于你收藏的回忆的问题，
                智能分析你的记录，提供个性化的回答。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshot Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <h2 className="section-title">应用界面</h2>
          <p className="section-subtitle">
            简洁美观的界面设计，让记录变得更加愉悦
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <img 
              src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mobile%20app%20screenshot%20of%20diary%20app%20with%20growth%20record%20interface%2C%20colorful%20and%20cute%20design&image_size=portrait_16_9" 
              alt="毛球日记App截图" 
              className="rounded-2xl shadow-xl max-w-xs"
            />
            <img 
              src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mobile%20app%20screenshot%20of%20diary%20app%20with%20footprint%20map%20interface%2C%20colorful%20and%20cute%20design&image_size=portrait_16_9" 
              alt="毛球日记App截图" 
              className="rounded-2xl shadow-xl max-w-xs"
            />
            <img 
              src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mobile%20app%20screenshot%20of%20diary%20app%20with%20time%20capsule%20interface%2C%20colorful%20and%20cute%20design&image_size=portrait_16_9" 
              alt="毛球日记App截图" 
              className="rounded-2xl shadow-xl max-w-xs"
            />
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 gradient-bg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">立即下载</h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            开始记录你的生活点滴，收藏每一个珍贵的瞬间
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#" className="bg-white text-dark py-4 px-8 rounded-xl flex items-center justify-center space-x-3 w-full sm:w-auto">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
                <path d="M17.593 1.151a.75.75 0 01.794.703l1.06 18.08a.75.75 0 01-.794.797H5.304a.75.75 0 01-.794-.797l1.06-18.08a.75.75 0 01.794-.703h11.28zM6.63 2.962l-.957 16.27h11.234l-.957-16.27H6.63z" />
                <path d="M8.875 10.125a.375.375 0 100 .75h6.25a.375.375 0 100-.75h-6.25z" />
                <path d="M8.875 13.125a.375.375 0 100 .75h6.25a.375.375 0 100-.75h-6.25z" />
              </svg>
              <div className="text-left">
                <p className="text-xs">Download on the</p>
                <p className="font-bold">App Store</p>
              </div>
            </a>
            
            <a href="#" className="bg-white text-dark py-4 px-8 rounded-xl flex items-center justify-center space-x-3 w-full sm:w-auto">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <div className="text-left">
                <p className="text-xs">GET IT ON</p>
                <p className="font-bold">Google Play</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">关于我们</h2>
          <p className="section-subtitle">
            毛球日记，用简单、干净、温暖的方式，帮你收藏生活的美好
          </p>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 mb-6">
              毛球日记，是一款专注于票据收藏与成长记录的时光伴侣。
              我们希望用简单、干净、温暖的方式，帮你把生活里的小确幸与大感动，通通收藏。
            </p>
            <p className="text-gray-600 mb-6">
              每一张电影票、车票、门票，都是一段时光的印记。
              每一个第一次、每一次生病、每一天的点滴，都是生命成长的足迹。
            </p>
            <p className="text-gray-600 mb-6">
              你好，我是开发者 AlanWu。App 的初衷，是因为我自己也是一个喜欢【收集票根】和【记录成长】的人，
              希望毛球日记能帮你留住那些美好的瞬间。
            </p>
            <p className="text-gray-600">
              如果你有任何建议或反馈，欢迎联系我们。
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20cartoon%20cat%20logo%20for%20diary%20app&image_size=square" alt="毛球日记" className="h-10 w-10 rounded-full" />
              <h3 className="ml-3 text-2xl font-bold">毛球日记</h3>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="hover:text-primary transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="hover:text-primary transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="hover:text-primary transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2026 毛球日记. 保留所有权利.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm">隐私政策</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">用户协议</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">联系我们</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;