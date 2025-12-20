// Project details grouped by domain, with optional subdomains and images
// Project list: easy to edit, grouped by domain
export const projects = [
  // Machine Learning & Deep Learning
  {
    difficulty: "Intermediate",
    domain: "Machine Learning & Deep Learning",
    title: "Customer Churn Prediction using ML",
    subdomain: "Marketing,Sales",
    tech: "Python, Scikit-learn, Pandas",
    description: "Predict customer churn using classification models (Logistic Regression, Random Forest, XGBoost). Analyze churn patterns and provide retention strategies.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Intermediate",
    domain: "Machine Learning & Deep Learning",
    title: "Sentiment Analysis on Social Media",
    subdomain: "",
    tech: "Python, NLP, NLTK, TextBlob",
    description: "Analyze Twitter/Instagram sentiments using NLP. Classify positive, negative, neutral tweets. Build real-time sentiment dashboard.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Advanced",
    domain: "Machine Learning & Deep Learning",
    title: "Image Classification with CNN",
    subdomain: "",
    tech: "Python, TensorFlow, Keras, OpenCV",
    description: "Build Convolutional Neural Network for image classification (Animals, Vehicles, Objects). Transfer learning with pre-trained models.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Advanced",
    domain: "Machine Learning & Deep Learning",
    title: "Recommendation System (Movies/Products)",
    subdomain: "",
    tech: "Python, Collaborative Filtering, Pandas",
    description: "Build recommendation engine using collaborative filtering. Predict user preferences for movies/products. Evaluate with RMSE/MAE.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Advanced",
    domain: "Machine Learning & Deep Learning",
    title: "Deepfake Video Detection",
    subdomain: "",
    tech: "Python,Opencv,Dl",
    description: "Detect deepfake videos using advanced deep learning models.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Advanced",
    domain: "Machine Learning & Deep Learning",
    title: "Chatbot using NLP & Transformers",
    subdomain: "",
    tech: "Python, BERT, Transformers, NLP",
    description: "Create intelligent chatbot using BERT/GPT. Handle customer queries, FAQs, sentiment-aware responses. Deploy with Flask.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Intermediate",
    domain: "Machine Learning & Deep Learning",
    title: "Time Series Forecasting (Stock Prices)",
    subdomain: "Finance,Stock Marketing",
    tech: "Python, ARIMA, Prophet, LSTM",
    description: "Forecast stock prices using ARIMA, Prophet, LSTM. Compare models, evaluate accuracy. Build prediction dashboard.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Advanced",
    domain: "Machine Learning & Deep Learning",
    title: "Anomaly Detection in Network Traffic",
    subdomain: "",
    tech: "Python, Isolation Forest, Autoencoders",
    description: "Detect network anomalies using unsupervised learning. Identify DDoS attacks, unusual patterns. Real-time monitoring system.",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80"
  },
  // Data Science & Analytics
  {
    difficulty: "Intermediate",
    domain: "Data Science & Analytics",
    title: "E-commerce Sales Analysis Dashboard",
    subdomain: "Marketing,Sales",
    tech: "Python, Pandas, Matplotlib, Seaborn",
    description: "Analyze e-commerce sales data. Identify trends, top products, customer behavior. Build interactive visualizations. Revenue forecasting.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Intermediate",
    domain: "Data Science & Analytics",
    title: "Healthcare Data Analysis & Prediction",
    subdomain: "Healthcare",
    tech: "Python, Pandas, Scikit-learn, Plotly",
    description: "Analyze patient data, disease prediction. Identify risk factors. Hospital readmission prediction using regression/classification.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Intermediate",
    domain: "Data Science & Analytics",
    title: "Uber/OLA Trip Analysis",
    subdomain: "",
    tech: "Python, Pandas, Folium, Geopy",
    description: "Analyze ride-sharing trip data. Peak hours, demand patterns, geographic hotspots. Visualize on maps. Surge pricing analysis.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Intermediate",
    domain: "Data Science & Analytics",
    title: "Netflix/YouTube Content Analysis",
    subdomain: "",
    tech: "Python, APIs, Pandas, Matplotlib",
    description: "Analyze movies/content data. Genre trends, rating analysis, viewer preferences. Most-watched content patterns.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Intermediate",
    domain: "Data Science & Analytics",
    title: "Real Estate Price Prediction",
    subdomain: "Real Estate",
    tech: "Python, Scikit-learn, Pandas, Regression",
    description: "Predict house prices based on features (location, size, amenities). Build regression model. Price forecasting system.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Beginner",
    domain: "Data Science & Analytics",
    title: "Student Performance Prediction",
    subdomain: "Education",
    tech: "Python, Pandas, Sklearn, Matplotlib",
    description: "Predict academic performance based on attendance, grades, socioeconomic factors. Early warning system for at-risk students.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Advanced",
    domain: "Data Science & Analytics",
    title: "Supply Chain Optimization Analysis",
    subdomain: "",
    tech: "Python, Optimization, Pandas, Scipy",
    description: "Analyze supply chain data. Identify bottlenecks, optimize inventory. Demand forecasting. Cost reduction strategies.",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80"
  },
  // Big Data & Spark
  {
    difficulty: "Advanced",
    domain: "Big Data & Spark",
    title: "Log File Analysis with Spark",
    subdomain: "",
    tech: "Spark, Scala/Python, HDFS",
    description: "Process millions of server logs using Spark. Identify errors, patterns, performance issues. Real-time log monitoring.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Advanced",
    domain: "Big Data & Spark",
    title: "ETL Pipeline for Data Warehouse",
    subdomain: "",
    tech: "Spark, Airflow, Python, SQL",
    description: "Build ETL pipeline to extract, transform, load data from multiple sources. Orchestrate with Airflow. Data quality checks.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Advanced",
    domain: "Big Data & Spark",
    title: "Social Media Big Data Processing",
    subdomain: "",
    tech: "Spark, Kafka, Hadoop, Python",
    description: "Process real-time social media streams using Spark. Sentiment analysis at scale. Trending topics extraction.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Advanced",
    domain: "Big Data & Spark",
    title: "E-commerce Clickstream Analysis",
    subdomain: "",
    tech: "Spark, Hive, MapReduce, Python",
    description: "Analyze user clickstream data at scale. User journey analysis. Conversion funnel optimization. Cohort analysis.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Advanced",
    domain: "Big Data & Spark",
    title: "IoT Sensor Data Processing",
    subdomain: "",
    tech: "Spark Streaming, Python, Kafka",
    description: "Process streaming IoT sensor data. Real-time anomaly detection. Dashboard for monitoring. Historical analysis.",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Advanced",
    domain: "Big Data & Spark",
    title: "Movie Recommendation at Scale",
    subdomain: "",
    tech: "Spark MLlib, Scala, Collaborative Filtering",
    description: "Build large-scale recommendation system using Spark MLlib. Handle millions of users/items. Matrix factorization.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Advanced",
    domain: "Big Data & Spark",
    title: "Network Traffic Analysis",
    subdomain: "",
    tech: "Spark, Python, Pandas on Spark",
    description: "Analyze network traffic at scale. Detect DDoS attacks, anomalies. Performance metrics. Security insights.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Advanced",
    domain: "Big Data & Spark",
    title: "Batch Processing for Analytics",
    subdomain: "",
    tech: "Spark, Python, Delta Lake, S3",
    description: "Build batch processing pipeline for analytics. Data aggregation from multiple sources. Incremental processing with Delta Lake.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Advanced",
    domain: "Big Data & Spark",
    title: "Machine Learning on Big Data",
    subdomain: "",
    tech: "Spark MLlib, Python, Scikit-learn",
    description: "Implement ML models at scale using Spark MLlib. Distributed training, hyperparameter tuning. Model evaluation on clusters.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Advanced",
    domain: "Big Data & Spark",
    title: "Time Series Data Analysis",
    subdomain: "Time Series",
    tech: "Spark, Python, Pandas, Time Series",
    description: "Analyze massive time series datasets. Seasonal decomposition, forecasting at scale. Real-time metric computation.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
  },
  // Data Analytics & Dashboarding
  {
    difficulty: "Intermediate",
    domain: "Data Analytics & Dashboarding",
    title: "COVID-19 Data Visualization",
    subdomain: "",
    tech: "Tableau, Python, Data Sources",
    description: "Visualize COVID-19 pandemic data globally. Maps, trends, statistics. Interactive dashboards with filters.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Beginner",
    domain: "Data Analytics & Dashboarding",
    title: "Excel Analytics & Reporting",
    subdomain: "",
    tech: "Excel, VBA, Power Query, Pivot Tables",
    description: "Build comprehensive Excel reports. Pivot tables, charts, automated reports with VBA. Dashboard creation.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Intermediate",
    domain: "Data Analytics & Dashboarding",
    title: "Google Analytics Dashboard",
    subdomain: "",
    tech: "Google Analytics, Python, Data Studio",
    description: "Analyze website traffic with Google Analytics. Build custom reports, dashboards. User behavior analysis.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Intermediate",
    domain: "Data Analytics & Dashboarding",
    title: "HR Analytics Dashboard",
    subdomain: "Hr",
    tech: "Power BI, SQL, HR Data",
    description: "HR metrics dashboard: Attrition, recruitment, payroll. Employee performance tracking. Turnover analysis.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Advanced",
    domain: "Data Analytics & Dashboarding",
    title: "Financial Performance Dashboard",
    subdomain: "Finance,Stock Marketing",
    tech: "Tableau, Power BI, SQL, Finance Data",
    description: "Executive financial dashboard. Revenue, expenses, profitability trends. Budget variance analysis. Forecasting.",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Intermediate",
    domain: "Data Analytics & Dashboarding",
    title: "Real Estate Market Dashboard",
    subdomain: "",
    tech: "Tableau, Python, Real Estate APIs",
    description: "Real estate market analysis dashboard. Price trends, locations, demand. Geographic visualizations with maps.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Intermediate",
    domain: "Data Analytics & Dashboarding",
    title: "Supply Chain KPI Dashboard",
    subdomain: "",
    tech: "Power BI, SQL, Supply Chain Data",
    description: "Supply chain metrics: Delivery time, inventory levels, costs. Performance tracking, bottleneck identification.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Intermediate",
    domain: "Data Analytics & Dashboarding",
    title: "Marketing Campaign Analytics",
    subdomain: "",
    tech: "Tableau, Google Analytics, Python",
    description: "Analyze marketing campaigns. ROI, conversion rates, channel performance. A/B testing analysis.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Intermediate",
    domain: "Data Analytics & Dashboarding",
    title: "Customer Retention Dashboard",
    subdomain: "Marketing,Sales",
    tech: "Power BI, SQL, CRM Data",
    description: "Track customer metrics: Churn, LTV, engagement. Segment analysis. Retention strategies.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
  },
  // Web Development & Full Stack
  {
    difficulty: "Intermediate",
    domain: "Web Development & Full Stack",
    title: "E-commerce Website",
    subdomain: "E-Commerce",
    tech: "Python/Django/Flask, React, MySQL",
    description: "Full-stack e-commerce platform. Product catalog, shopping cart, payments (Stripe), user authentication, order management.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Advanced",
    domain: "Web Development & Full Stack",
    title: "Social Media Platform",
    subdomain: "",
    tech: "MERN Stack (MongoDB, Express, React, Node)",
    description: "Build social media site: User profiles, posts, comments, likes, messaging. Real-time notifications with WebSockets.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Intermediate",
    domain: "Web Development & Full Stack",
    title: "Project Management Tool",
    subdomain: "",
    tech: "React, Node.js, MongoDB, REST API",
    description: "Collaborative project management app. Tasks, teams, deadlines, real-time updates. Dashboard with analytics.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Beginner",
    domain: "Web Development & Full Stack",
    title: "Blogging Platform",
    subdomain: "",
    tech: "Python/Flask, SQLite, HTML/CSS/JS",
    description: "Blog platform with user authentication, post creation, comments, categories. SEO-friendly URLs, search functionality.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80"
  },
  // Stock Market & Finance
  {
    difficulty: "Advanced",
    domain: "Stock Market & Finance",
    title: "Stock Price Prediction Model",
    subdomain: "Finance,Stock Marketing",
    tech: "Python, LSTM, TensorFlow, Yfinance",
    description: "Predict stock prices using LSTM neural networks. Historical data analysis, technical indicators, real-time predictions.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Advanced",
    domain: "Stock Market & Finance",
    title: "Portfolio Optimization",
    subdomain: "",
    tech: "Python, NumPy, Scipy, PyPortfolioOpt",
    description: "Optimize investment portfolio for risk-return. Monte Carlo simulation, Efficient Frontier, Sharpe ratio calculation.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Intermediate",
    domain: "Stock Market & Finance",
    title: "Stock Sentiment Analysis (News)",
    subdomain: "Finance,Stock Marketing",
    tech: "Python, NLP, NewsAPI, VADER",
    description: "Analyze financial news sentiment. Extract stock mentions, predict price movement based on sentiment trends.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Advanced",
    domain: "Stock Market & Finance",
    title: "Algorithmic Trading Bot",
    subdomain: "",
    tech: "Python, TA-Lib, Zipline, Backtesting",
    description: "Build trading bot with technical indicators. Backtesting, live trading simulation, risk management, profit optimization.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Advanced",
    domain: "Stock Market & Finance",
    title: "Cryptocurrency Analysis & Prediction",
    subdomain: "Cryptocurrency",
    tech: "Python, LSTM, Binance API, Pandas",
    description: "Analyze cryptocurrency data. Price prediction, trend analysis, trading signals. Integration with Binance/Coinbase.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Advanced",
    domain: "Stock Market & Finance",
    title: "Option Pricing Model (Black-Scholes)",
    subdomain: "Finance,Stock Marketing",
    tech: "Python, NumPy, SciPy, Matplotlib",
    description: "Implement Black-Scholes option pricing model. Greeks calculation, volatility analysis, hedging strategies.",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Intermediate",
    domain: "Stock Market & Finance",
    title: "Stock Screener Application",
    subdomain: "Finance,Stock Marketing",
    tech: "Python, Yfinance, Pandas, Streamlit",
    description: "Build stock screener with custom filters. Price criteria, technical indicators, fundamental analysis, watchlist management.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Advanced",
    domain: "Stock Market & Finance",
    title: "Risk Analysis & VaR Calculation",
    subdomain: "",
    tech: "Python, NumPy, Scipy, Monte Carlo",
    description: "Calculate Value at Risk (VaR) for portfolio. Stress testing, scenario analysis, risk reporting.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Intermediate",
    domain: "Stock Market & Finance",
    title: "IPO Performance Analysis",
    subdomain: "Finance,Stock Marketing",
    tech: "Python, Web Scraping, Pandas, Matplotlib",
    description: "Analyze IPO performance. Subscription data, allotment, listing gains. Identify patterns and trends.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Intermediate",
    domain: "Stock Market & Finance",
    title: "Dividend & Earnings Calendar",
    subdomain: "Finance,Stock Marketing",
    tech: "Python, APIs, Pandas, Flask",
    description: "Build earnings/dividend calendar. Notifications, historical data, earnings surprises, analyst expectations.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
  },
  // Web Scraping & Data Collection
  {
    difficulty: "Intermediate",
    domain: "Web Scraping & Data Collection",
    title: "E-commerce Price Monitoring",
    subdomain: "Finance,Stock Marketing",
    tech: "Python, BeautifulSoup, Selenium, Pandas",
    description: "Scrape product prices from Amazon/Flipkart. Price trend analysis, competitor comparison, price drop alerts.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Intermediate",
    domain: "Web Scraping & Data Collection",
    title: "Job Portal Data Extraction",
    subdomain: "Finance,Stock Marketing,Hr",
    tech: "Python, Scrapy, Selenium, SQLite",
    description: "Scrape job listings from LinkedIn/Indeed. Extract salary, location, skills. Build job market analytics.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Intermediate",
    domain: "Web Scraping & Data Collection",
    title: "Real Estate Listing Crawler",
    subdomain: "",
    tech: "Python, BeautifulSoup, Selenium, Geopy",
    description: "Scrape property listings. Extract prices, locations, features. Real estate market analysis and visualization.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Beginner",
    domain: "Web Scraping & Data Collection",
    title: "News Aggregator",
    subdomain: "",
    tech: "Python, BeautifulSoup, Feedparser, Flask",
    description: "Aggregate news from multiple sources. Categorize, search, display. Real-time news feed application.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Beginner",
    domain: "Web Scraping & Data Collection",
    title: "Weather Data Collection",
    subdomain: "",
    tech: "Python, APIs (OpenWeather), Pandas",
    description: "Collect weather data from APIs. Historical trends, forecasting, visualization, alerts system.",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Intermediate",
    domain: "Web Scraping & Data Collection",
    title: "Restaurant Reviews Scraper",
    subdomain: "",
    tech: "Python, Selenium, BeautifulSoup, NLP",
    description: "Scrape restaurant reviews from Zomato/Yelp. Sentiment analysis, rating analysis, chef/menu popularity.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Intermediate",
    domain: "Web Scraping & Data Collection",
    title: "Stock Data Aggregator",
    subdomain: "Finance,Stock Marketing",
    tech: "Python, Yfinance, Scrapy, Pandas",
    description: "Collect stock data from multiple sources. Real-time quotes, historical data, fundamental data aggregation.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Intermediate",
    domain: "Web Scraping & Data Collection",
    title: "Social Media Data Extraction",
    subdomain: "",
    tech: "Python, Tweepy, Instagrapi, Pandas",
    description: "Extract Twitter/Instagram data. Hashtag trends, influencer metrics, engagement analysis, sentiment tracking.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Intermediate",
    domain: "Web Scraping & Data Collection",
    title: "Academic Paper Crawler",
    subdomain: "",
    tech: "Python, BeautifulSoup, Selenium, PyPDF2",
    description: "Scrape academic papers from arXiv, Google Scholar. Extract citations, keywords, research trends analysis.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80"
  },
  {
    difficulty: "Beginner",
    domain: "Web Scraping & Data Collection",
    title: "Movie Database Builder",
    subdomain: "",
    tech: "Python, BeautifulSoup, IMDb API, SQLite",
    description: "Build movie database by scraping IMDb. Ratings, genres, cast, reviews. Movie recommendation system.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
  },
  // Networking & Security
  {
    difficulty: "Intermediate",
    domain: "Networking & Security",
    title: "Network Packet Analyzer (Sniffer)",
    subdomain: "",
    tech: "Python, Scapy, Wireshark, Dpkt",
    description: "Build packet sniffer to analyze network traffic. Protocol analysis, packet filtering, security threat detection.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
  },
  // ...existing code...
];
