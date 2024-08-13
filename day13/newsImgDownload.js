const axios = require("./crawling/node_modules/axios");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");

// 뉴스 URL
const url = "https://news.naver.com/main/ranking/popularDay.naver";

// 이미지 저장 디렉토리
const imageDir = "./images";

// 디렉토리 생성
if (!fs.existsSync(imageDir)) {
  fs.mkdirSync(imageDir);
}

// 이미지 다운로드 함수
const downloadImage = async (imageUrl, fileName) => {
  const filePath = path.resolve(imageDir, fileName);
  const writer = fs.createWriteStream(filePath);

  const response = await axios({
    url: imageUrl,
    method: "GET",
    responseType: "stream",
  });

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on("finish", resolve);
    writer.on("error", reject);
  });
};

// 뉴스 크롤링 및 이미지 다운로드
const fetchNaverNews = async () => {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    // 예시: 각 뉴스 기사에서 이미지 추출
    $("div.ranking_thumb img").each(async (index, element) => {
      const imageUrl = $(element).attr("src");
      const fileName = `news_image_${index + 1}.jpg`;

      console.log(`Downloading image: ${imageUrl}`);

      try {
        await downloadImage(imageUrl, fileName);
        console.log(`Image saved as ${fileName}`);
      } catch (error) {
        console.error(`Failed to download image: ${error.message}`);
      }
    });
  } catch (error) {
    console.error(`Error fetching news: ${error.message}`);
    document.querySelector(
      "#wrap > div.rankingnews._popularWelBase._persist > div.rankingnews_box_wrap._popularRanking > div > div:nth-child(1) > ul > li:nth-child(1) > a > img"
    );
  }
};

// 실행
fetchNaverNews();
