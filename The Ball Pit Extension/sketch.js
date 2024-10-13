let balls = []; //empty arry to be populated later 
let gravity = 0.9;
let links;

let links_amazon = [
  "https://www.amnesty.org/en/latest/news/2023/10/saudi-arabia-migrants-workers-who-toiled-in-amazon-warehouses-were-deceived-and-exploited/",
  "https://www.icij.org/investigations/trafficking-inc/amazon-pays-1-9-million-to-workers-in-saudi-arabia-harmed-by-labor-abuses/",
  "https://news.un.org/en/story/2023/10/1143067",
  "https://www.forbes.com/sites/jackkelly/2021/10/25/a-hard-hitting-investigative-report-into-amazon-shows-that-workers-needs-were-neglected-in-favor-of-getting-goods-delivered-quickly/",
  "https://revealnews.org/article/how-amazon-hid-its-safety-crisis/",
  "https://www.cnbc.com/2023/04/12/study-amazon-workers-seriously-hurt-at-twice-rate-of-other-warehouses.html",
  "https://www.bloomberg.com/news/articles/2023-10-25/amazon-worker-injuries-more-widespread-than-thought-study-says?embedded-checkout=true",
  "https://www.bbc.co.uk/news/technology-57332390",
  "https://www.bbc.co.uk/news/business-56101858",
  "https://www.cnbc.com/2023/10/25/study-amazons-focus-on-speed-surveillance-drives-worker-injuries.html",
  "https://www.wired.com/story/amazon-failed-to-protect-your-data-investigation/",
  "https://www.wired.com/story/amazon-european-parliament-ban/",
  "https://www.bbc.co.uk/news/business-59309355",
  "https://warehouseworkers.org/amazon-cited-for-serious-health-and-safety-violations-at-san-bernardino-warehouse/",
  "https://www.dol.gov/newsroom/releases/osha/osha20230201-0",
  "https://www.vice.com/en/article/z3m4wa/drivers-sue-amazon-over-inhumane-conditions-having-to-pee-in-bottles",
  "https://www.amnesty.org.uk/press-releases/black-friday-amazon-putting-workers-lives-risk-during-shopping-rush-new-report",
  "https://www.itv.com/news/2021-06-21/amazon-destroying-millions-of-items-of-unsold-stock-in-one-of-its-uk-warehouses-every-year-itv-news-investigation-finds",
  "https://www.greenpeace.org.uk/news/stop-amazon-throwing-away-millions-unused-products/",
  "https://environmentamerica.org/articles/amazon-is-destroying-unsold-products-by-the-thousands/",
  "https://www.independent.co.uk/business/experts-warn-of-ewaste-issues-over-iphone-charging-port-switch-b2409599.html",
  "https://www.theguardian.com/technology/2020/nov/26/amazon-and-apple-not-playing-their-part-in-tackling-electronic-waste",
  "https://www.theguardian.com/us-news/article/2024/may/21/amazon-surveillance-lawsuit-union",
  "https://www.bbc.co.uk/news/business-68067022",
  "https://www.business-humanrights.org/en/latest-news/usa-amazon-ceo-broke-federal-labour-law-with-anti-union-remakrs-judge-rules/",
  "https://www.business-humanrights.org/en/latest-news/amazon-and-walmart-warehouse-employees-are-so-surveilled-that-theyre-worried-about-breaking-to-use-the-bathroom-oxfam-report/",
  "https://www.business-humanrights.org/en/latest-news/usa-amazon-and-walmart-warehouse-conditions-likened-to-slavery-with-intense-pressure-to-work-faster-and-high-levels-of-surveillance-incl-co-comments/",
  "https://www.business-humanrights.org/en/latest-news/meta-allegedly-intercepted-decripted-snapchat-amazon-youtube-users-data-documents-reveal/",
  "https://nationalpost.com/news/canada/working-conditions-are-hell-amazon-employees-not-surprised-its-warehouses-have-seen-hundreds-of-covid-cases",
  "https://www.schorrlaw.com/amazon-charged-with-racial-and-disability-discrimination-at-new-jersey-facility/",
  "https://nypost.com/2022/05/18/ny-sues-amazon-over-discrimination-against-pregnant-",
  "https://www.forbes.com/sites/jackkelly/2021/10/25/a-hard-hitting-investigative-report-into-amazon-shows-that-workers-needs-were-neglected-in-favor-of-getting-goods-delivered-quickly/",
  "https://www.geekwire.com/2021/amazon-facing-race-gender-discrimination-lawsuits/",
  "https://www.cnbc.com/2020/10/24/how-amazon-prevents-unions-by-surveilling-",
  "https://nypost.com/2019/04/29/amazon-warehouse-workers-are-getting-fired-by-",
  "https://www.nbcnews.com/tech/tech-news/amazon-suppliers-linked-forced-labor-china-watchdog-group-says-rcna16452",
  "https://theintercept.com/2024/05/01/google-amazon-nimbus-israel-weapons-arms-gaza/",
  "https://azmirror.com/2024/05/15/arizona-sues-amazon-alleging-violations-of-consumer-fraud-and-antitrust-laws/",
  "https://www.washingtonpost.com/technology/2024/03/14/amazon-labor-law-violation-workers/",
  "https://www.yalelawjournal.org/note/amazons-antitrust-paradox",
  "https://www.politico.eu/article/german-lawsuit-accuses-amazon-of-breaking-eu-privacy-law/",
  "https://www.reuters.com/legal/amazon-loses-bid-toss-consumer-antitrust-lawsuit-2023-03-27/",
  "https://www.politico.eu/article/data-at-risk-amazon-security-threat/",
  "https://www.nytimes.com/2021/10/24/technology/amazon-employee-leave-errors.html",
  "https://www.theverge.com/2020/1/28/21080720/amazon-product-liability-lawsuits-marketplace-damage-third-party",
  "https://www.vox.com/recode/2021/2/26/22297554/amazon-race-black-diversity-inclusion",
];

let links_apple = [
"https://www.reuters.com/sustainability/activists-press-apple-oppose-vietnams-detainments-climate-experts-2024-04-11/",
"https://www.aljazeera.com/opinions/2023/1/10/a-pivot-out-of-china-can-be-a-human-rights-reset-for-tech-giants",
"https://amnesty.org/en/latest/press-release/2017/11/industry-giants-fail-to-tackle-child-labour-allegations-in-cobalt-battery-supply-chains/",
"https://www.bloomberg.com/news/articles/2023-01-30/apple-executives-violated-worker-rights-us-labor-officials-say?embedded-checkout=true",
"https://www.forbes.com/sites/ewelinaochab/2020/01/13/are-these-tech-companies-complicit-in-human-rights-abuses-of-child-cobalt-miners-in-congo/?sh=2e9467a93b17",
"https://www.amnesty.org/en/latest/news/2016/01/child-labour-behind-smart-phone-and-electric-car-batteries/",
"https://www.theverge.com/2021/5/10/22428899/apple-suppliers-china-uyghur-forced-labor-report",
"https://www.amnesty.org/en/latest/news/2018/02/5-things-you-need-to-know-about-apple-in-china/",
"https://www.amnesty.org/en/latest/news/2021/07/pegasus-project-apple-iphones-compromised-by-nso-spyware/",
"https://www.cnbc.com/2022/03/04/apple-shareholders-vote-for-company-to-conduct-a-civil-rights-audit.html",
"https://www.ft.com/content/a0e75b32-8f95-4869-af94-e5f44f0f7961",
"https://www.forbes.com/sites/kateoflahertyuk/2024/04/12/apple-issues-new-spyware-attack-warning-to-iphone-users/?sh=3d58afb43e04",
"https://www.theguardian.com/technology/2020/nov/26/amazon-and-apple-not-playing-their-part-in-tackling-electronic-waste",
"https://www.greenpeace.org.uk/news/stop-amazon-throwing-away-millions-unused-products/",
"https://www.nytimes.com/2012/01/26/business/ieconomy-apples-ipad-and-the-human-costs-for-workers-in-china.html?pagewanted=all&_r=0", 
"https://www.npr.org/sections/goatsandsoda/2023/02/01/1152893248/red-cobalt-congo-drc-mining-siddharth-kara",]; 
// these links can be accessed in the HRC Data Set file as well, linked in the references below; 



let stopThreshold = 0.5; // Threshold below which the speed will be set to zero

function setup() {
 c = createCanvas(windowWidth, windowHeight);
 c.style("position","absolute"); 
 c.style("z-index", "1000"); // this allows to override the particular structuring of the code from the web page;
 c.style("top", "0");
 c.style("mix-blend-mode", "multiply"); // allowing for better visibility with the pre-existing web page;

let page_url = getURL();
if (page_url.includes("amazon")){
  links = links_amazon;
} else if (page_url.includes("apple")) {
  links = links_apple;
} // this line of code can be used to scale this project to include other big tech companies, fast fashion companies, etc. Using a simple 'if, else if' function helps to categorise and execute the links based on the company;
 

  
  for (let i = 0; i < links.length; i++) {
    let radius = random(40, 100);
    let x = random(radius, width - radius);
    let y = random(-100, -10);
    let color = [random(255), random(255), random(255)];
    
    let link = random(links); // randomly assign a link
    balls.push(new Ball(x, y, radius, color, link)); //the 'push' function adds another object into the array, associating it with the number of objects in 'links'; 
    
  } // for each link, there will be a new circle associated with it; therefore the more links, the more circles; 
}

function draw() {
  background(255);

  let overBall = false;
  for (let ball of balls) {
    ball.applyGravity();
    ball.checkEdges();
    ball.update();
    ball.display();
    ball.checkCollision(balls);
    if (ball.isHovered(mouseX, mouseY)) {
      overBall = true;
    }
  }

  //change cursor if over any ball to indicate that it can be clicked;
  if (overBall) {
    cursor(HAND);
  } else {
    cursor(ARROW);
  }
}

// this opens the tab to lead the user to the news reports/investigations of the companies violating human rights claims;
function mousePressed() {
  for (let ball of balls) {
    if (ball.isClicked(mouseX, mouseY)) {
      window.open(ball.link, "_blank");
    }
  }
}

// the following pieces of code control the motion and the physics of the circles:


class Ball {
  constructor(x, y, r, col, link) // contrusctor aims to create the initial instances for an object or class;
  {
    this.x = x;
    this.y = y;
    this.r = r;
    this.col = col;
    this.link = link;
    this.xSpeed = random(-2, 2);
    this.ySpeed = 0;
  }

  
  applyGravity() {
    this.ySpeed += gravity;
  }

  checkEdges() {
    if (this.x - this.r < 0 || this.x + this.r > width) {
      this.xSpeed *= -1;
    }
    if (this.y + this.r > height) {
      this.y = height - this.r;
      this.ySpeed *= -0.2; // when it approaches the bottom of the window height it decelerates just a little; 
      this.xSpeed *= 0.95; // the same for the width;

      // once it goes below the speed threshold, it stops;
      if (abs(this.ySpeed) < stopThreshold) {
        this.ySpeed = 0;
      }
      if (abs(this.xSpeed) < stopThreshold) {
        this.xSpeed = 0;
      }
    }
  }

  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  display() {
    fill(this.col);
    noStroke();
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }

  isHovered(mx, my) {
    let d = dist(mx, my, this.x, this.y);
    return d < this.r;
  }

  isClicked(mx, my) {
    return this.isHovered(mx, my);
  }

 // this checks if the circles are overlapping/colliding with each other, to slow down their speed, and to move them to a position away from each other to minimise the collisions from further occuring;
  checkCollision(balls) {
    for (let other of balls) {
      if (other != this) {
        let d = dist(this.x, this.y, other.x, other.y);
        let minDist = this.r + other.r;
        if (d < minDist) {
          let angle = atan2(other.y - this.y, other.x - this.x);
          let targetX = this.x + cos(angle) * minDist;
          let targetY = this.y + sin(angle) * minDist;
          let ax = (targetX - other.x) * 0.05;
          let ay = (targetY - other.y) * 0.05;
          this.xSpeed -= ax;
          this.ySpeed -= ay;
          other.xSpeed += ax;
          other.ySpeed += ay;
        }
      }
    }
  }
}
