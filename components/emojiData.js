// Enhanced emoji data to support larger games
const emojiData = {
  "animals-and-nature": [
    { name: "dog", htmlCode: "&#128054;", unicode: "🐶" },
    { name: "cat", htmlCode: "&#128049;", unicode: "🐱" },
    { name: "mouse", htmlCode: "&#128045;", unicode: "🐭" },
    { name: "hamster", htmlCode: "&#128057;", unicode: "🐹" },
    { name: "rabbit", htmlCode: "&#128048;", unicode: "🐰" },
    { name: "fox", htmlCode: "&#129418;", unicode: "🦊" },
    { name: "bear", htmlCode: "&#128059;", unicode: "🐻" },
    { name: "panda", htmlCode: "&#128060;", unicode: "🐼" },
    { name: "koala", htmlCode: "&#128040;", unicode: "🐨" },
    { name: "tiger", htmlCode: "&#128047;", unicode: "🐯" },
    { name: "lion", htmlCode: "&#129409;", unicode: "🦁" },
    { name: "cow", htmlCode: "&#128046;", unicode: "🐮" },
    { name: "pig", htmlCode: "&#128055;", unicode: "🐷" },
    { name: "frog", htmlCode: "&#128056;", unicode: "🐸" },
    { name: "monkey", htmlCode: "&#128053;", unicode: "🐵" },
    { name: "chicken", htmlCode: "&#128020;", unicode: "🐔" },
    { name: "penguin", htmlCode: "&#128039;", unicode: "🐧" },
    { name: "bird", htmlCode: "&#128038;", unicode: "🐦" },
    { name: "eagle", htmlCode: "&#129413;", unicode: "🦅" },
    { name: "duck", htmlCode: "&#129414;", unicode: "🦆" },
    { name: "swan", htmlCode: "&#129442;", unicode: "🦢" },
    { name: "owl", htmlCode: "&#129417;", unicode: "🦉" },
    { name: "elephant", htmlCode: "&#128024;", unicode: "🐘" },
    { name: "rhino", htmlCode: "&#129423;", unicode: "🦏" },
    { name: "hippo", htmlCode: "&#129435;", unicode: "🦛" },
    { name: "wolf", htmlCode: "&#128058;", unicode: "🐺" },
    { name: "boar", htmlCode: "&#128023;", unicode: "🐗" },
    { name: "horse", htmlCode: "&#128052;", unicode: "🐴" },
    { name: "unicorn", htmlCode: "&#129412;", unicode: "🦄" },
    { name: "bee", htmlCode: "&#128029;", unicode: "🐝" },
    { name: "butterfly", htmlCode: "&#129419;", unicode: "🦋" },
    { name: "snail", htmlCode: "&#128012;", unicode: "🐌" },
    { name: "ladybug", htmlCode: "&#128030;", unicode: "🐞" },
    { name: "ant", htmlCode: "&#128028;", unicode: "🐜" },
    { name: "spider", htmlCode: "&#128375;", unicode: "🕷️" },
    { name: "turtle", htmlCode: "&#128034;", unicode: "🐢" },
    { name: "snake", htmlCode: "&#128013;", unicode: "🐍" },
    { name: "dragon", htmlCode: "&#128050;", unicode: "🐲" },
    { name: "dinosaur", htmlCode: "&#129430;", unicode: "🦖" },
    { name: "crocodile", htmlCode: "&#128010;", unicode: "🐊" },
    { name: "whale", htmlCode: "&#128051;", unicode: "🐳" },
    { name: "dolphin", htmlCode: "&#128044;", unicode: "🐬" },
    { name: "fish", htmlCode: "&#128031;", unicode: "🐟" },
    { name: "tropical-fish", htmlCode: "&#128032;", unicode: "🐠" },
    { name: "blowfish", htmlCode: "&#128033;", unicode: "🐡" },
    { name: "octopus", htmlCode: "&#128025;", unicode: "🐙" },
    { name: "crab", htmlCode: "&#129408;", unicode: "🦀" },
    { name: "lobster", htmlCode: "&#129438;", unicode: "🦞" },
    { name: "squid", htmlCode: "&#129425;", unicode: "🦑" },
    { name: "palm-tree", htmlCode: "&#127796;", unicode: "🌴" }
  ],
  "smileys-and-people": [
    { name: "smile", htmlCode: "&#128522;", unicode: "😊" },
    { name: "laugh", htmlCode: "&#128514;", unicode: "😂" },
    { name: "wink", htmlCode: "&#128521;", unicode: "😉" },
    { name: "heart-eyes", htmlCode: "&#128525;", unicode: "😍" },
    { name: "kiss", htmlCode: "&#128536;", unicode: "😘" },
    { name: "thinking", htmlCode: "&#129300;", unicode: "🤔" },
    { name: "sunglasses", htmlCode: "&#128526;", unicode: "😎" },
    { name: "neutral", htmlCode: "&#128528;", unicode: "😐" },
    { name: "expressionless", htmlCode: "&#128529;", unicode: "😑" },
    { name: "sleeping", htmlCode: "&#128564;", unicode: "😴" },
    { name: "confused", htmlCode: "&#128533;", unicode: "😕" },
    { name: "worried", htmlCode: "&#128543;", unicode: "😟" },
    { name: "cry", htmlCode: "&#128546;", unicode: "😢" },
    { name: "scream", htmlCode: "&#128561;", unicode: "😱" },
    { name: "angry", htmlCode: "&#128544;", unicode: "😠" },
    { name: "devil", htmlCode: "&#128520;", unicode: "😈" },
    { name: "alien", htmlCode: "&#128125;", unicode: "👽" },
    { name: "ghost", htmlCode: "&#128123;", unicode: "👻" },
    { name: "ninja", htmlCode: "&#129399;", unicode: "🥷" },
    { name: "astronaut", htmlCode: "&#129464;", unicode: "🧑‍🚀" },
    { name: "joy", htmlCode: "&#128513;", unicode: "😁" },
    { name: "innocent", htmlCode: "&#128519;", unicode: "😇" },
    { name: "smirk", htmlCode: "&#128527;", unicode: "😏" },
    { name: "relieved", htmlCode: "&#128524;", unicode: "😌" },
    { name: "nerd", htmlCode: "&#129299;", unicode: "🤓" },
    { name: "surprise", htmlCode: "&#128562;", unicode: "😲" },
    { name: "crazy", htmlCode: "&#128565;", unicode: "😵" },
    { name: "rofl", htmlCode: "&#129315;", unicode: "🤣" },
    { name: "drooling", htmlCode: "&#129316;", unicode: "🤤" },
    { name: "money-mouth", htmlCode: "&#129297;", unicode: "🤑" },
    { name: "sick", htmlCode: "&#129298;", unicode: "🤒" },
    { name: "cowboy", htmlCode: "&#129312;", unicode: "🤠" },
    { name: "clown", htmlCode: "&#129313;", unicode: "🤡" },
    { name: "masked", htmlCode: "&#128567;", unicode: "😷" },
    { name: "unamused", htmlCode: "&#128530;", unicode: "😒" },
    { name: "shushing", htmlCode: "&#129323;", unicode: "🤫" },
    { name: "zipper-mouth", htmlCode: "&#129296;", unicode: "🤐" },
    { name: "eyes", htmlCode: "&#128064;", unicode: "👀" },
    { name: "princess", htmlCode: "&#128120;", unicode: "👸" },
    { name: "superhero", htmlCode: "&#129464;", unicode: "🦸" },
    { name: "mage", htmlCode: "&#129497;", unicode: "🧙" },
    { name: "fairy", htmlCode: "&#129498;", unicode: "🧚" },
    { name: "zombie", htmlCode: "&#129503;", unicode: "🧟" },
    { name: "mermaid", htmlCode: "&#129500;", unicode: "🧜" },
    { name: "elf", htmlCode: "&#129501;", unicode: "🧝" },
    { name: "vampire", htmlCode: "&#129499;", unicode: "🧛" },
    { name: "gesturing-no", htmlCode: "&#128581;", unicode: "🙅" },
    { name: "gesturing-ok", htmlCode: "&#128582;", unicode: "🙆" },
    { name: "handshake", htmlCode: "&#129309;", unicode: "🤝" }
  ],
  "food-and-drink": [
    { name: "apple", htmlCode: "&#127822;", unicode: "🍎" },
    { name: "banana", htmlCode: "&#127820;", unicode: "🍌" },
    { name: "orange", htmlCode: "&#127818;", unicode: "🍊" },
    { name: "lemon", htmlCode: "&#127819;", unicode: "🍋" },
    { name: "strawberry", htmlCode: "&#127827;", unicode: "🍓" },
    { name: "grapes", htmlCode: "&#127815;", unicode: "🍇" },
    { name: "watermelon", htmlCode: "&#127817;", unicode: "🍉" },
    { name: "pizza", htmlCode: "&#127829;", unicode: "🍕" },
    { name: "hamburger", htmlCode: "&#127828;", unicode: "🍔" },
    { name: "fries", htmlCode: "&#127839;", unicode: "🍟" },
    { name: "taco", htmlCode: "&#127790;", unicode: "🌮" },
    { name: "sushi", htmlCode: "&#127843;", unicode: "🍣" },
    { name: "cupcake", htmlCode: "&#129473;", unicode: "🧁" },
    { name: "cookie", htmlCode: "&#127850;", unicode: "🍪" },
    { name: "coffee", htmlCode: "&#9749;", unicode: "☕" },
    { name: "beer", htmlCode: "&#127866;", unicode: "🍺" },
    { name: "wine", htmlCode: "&#127863;", unicode: "🍷" },
    { name: "cocktail", htmlCode: "&#127864;", unicode: "🍸" },
    { name: "ice-cream", htmlCode: "&#127846;", unicode: "🍦" },
    { name: "cake", htmlCode: "&#127856;", unicode: "🎂" },
    { name: "pear", htmlCode: "&#127824;", unicode: "🍐" },
    { name: "peach", htmlCode: "&#127825;", unicode: "🍑" },
    { name: "cherry", htmlCode: "&#127826;", unicode: "🍒" },
    { name: "pineapple", htmlCode: "&#127821;", unicode: "🍍" },
    { name: "kiwi", htmlCode: "&#129373;", unicode: "🥝" },
    { name: "coconut", htmlCode: "&#129777;", unicode: "🥥" },
    { name: "avocado", htmlCode: "&#129361;", unicode: "🥑" },
    { name: "eggplant", htmlCode: "&#127814;", unicode: "🍆" },
    { name: "potato", htmlCode: "&#129364;", unicode: "🥔" },
    { name: "carrot", htmlCode: "&#129365;", unicode: "🥕" },
    { name: "corn", htmlCode: "&#127805;", unicode: "🌽" },
    { name: "pepper", htmlCode: "&#129369;", unicode: "🌶️" },
    { name: "garlic", htmlCode: "&#129476;", unicode: "🧄" },
    { name: "bread", htmlCode: "&#127838;", unicode: "🍞" },
    { name: "croissant", htmlCode: "&#129360;", unicode: "🥐" },
    { name: "baguette", htmlCode: "&#129366;", unicode: "🥖" },
    { name: "pretzel", htmlCode: "&#129384;", unicode: "🥨" },
    { name: "cheese", htmlCode: "&#129472;", unicode: "🧀" },
    { name: "egg", htmlCode: "&#129370;", unicode: "🥚" },
    { name: "bacon", htmlCode: "&#129363;", unicode: "🥓" },
    { name: "steak", htmlCode: "&#129385;", unicode: "🥩" },
    { name: "pancakes", htmlCode: "&#129374;", unicode: "🥞" },
    { name: "waffle", htmlCode: "&#129479;", unicode: "🧇" },
    { name: "doughnut", htmlCode: "&#127849;", unicode: "🍩" },
    { name: "salad", htmlCode: "&#129367;", unicode: "🥗" },
    { name: "popcorn", htmlCode: "&#127871;", unicode: "🍿" },
    { name: "chocolate", htmlCode: "&#127851;", unicode: "🍫" },
    { name: "candy", htmlCode: "&#127852;", unicode: "🍬" },
    { name: "lollipop", htmlCode: "&#127853;", unicode: "🍭" },
    { name: "tea", htmlCode: "&#127861;", unicode: "🍵" }
  ],
  "travel-and-places": [
    { name: "car", htmlCode: "&#128664;", unicode: "🚘" },
    { name: "train", htmlCode: "&#128646;", unicode: "🚆" },
    { name: "airplane", htmlCode: "&#9992;", unicode: "✈️" },
    { name: "rocket", htmlCode: "&#128640;", unicode: "🚀" },
    { name: "motorcycle", htmlCode: "&#127949;", unicode: "🏍️" },
    { name: "bicycle", htmlCode: "&#128690;", unicode: "🚲" },
    { name: "bus", htmlCode: "&#128652;", unicode: "🚌" },
    { name: "taxi", htmlCode: "&#128661;", unicode: "🚕" },
    { name: "ambulance", htmlCode: "&#128657;", unicode: "🚑" },
    { name: "fire-engine", htmlCode: "&#128658;", unicode: "🚒" },
    { name: "police-car", htmlCode: "&#128659;", unicode: "🚓" },
    { name: "ship", htmlCode: "&#128674;", unicode: "🚢" },
    { name: "speedboat", htmlCode: "&#128676;", unicode: "🚤" },
    { name: "sailboat", htmlCode: "&#9973;", unicode: "⛵" },
    { name: "canoe", htmlCode: "&#128675;", unicode: "🛶" },
    { name: "anchor", htmlCode: "&#9875;", unicode: "⚓" },
    { name: "world-map", htmlCode: "&#128506;", unicode: "🗺️" },
    { name: "beach", htmlCode: "&#127958;", unicode: "🏖️" },
    { name: "desert", htmlCode: "&#127964;", unicode: "🏜️" },
    { name: "mountain", htmlCode: "&#9968;", unicode: "⛰️" },
    { name: "volcano", htmlCode: "&#127755;", unicode: "🌋" },
    { name: "tent", htmlCode: "&#9978;", unicode: "⛺" },
    { name: "house", htmlCode: "&#127968;", unicode: "🏠" },
    { name: "castle", htmlCode: "&#127984;", unicode: "🏰" },
    { name: "bridge", htmlCode: "&#128032;", unicode: "🌉" }
  ],
  "objects": [
    { name: "watch", htmlCode: "&#8986;", unicode: "⌚" },
    { name: "mobile", htmlCode: "&#128241;", unicode: "📱" },
    { name: "computer", htmlCode: "&#128187;", unicode: "💻" },
    { name: "keyboard", htmlCode: "&#9000;", unicode: "⌨️" },
    { name: "printer", htmlCode: "&#128424;", unicode: "🖨️" },
    { name: "camera", htmlCode: "&#128247;", unicode: "📷" },
    { name: "video-camera", htmlCode: "&#128249;", unicode: "📹" },
    { name: "microphone", htmlCode: "&#127908;", unicode: "🎤" },
    { name: "headphones", htmlCode: "&#127911;", unicode: "🎧" },
    { name: "radio", htmlCode: "&#128251;", unicode: "📻" },
    { name: "television", htmlCode: "&#128250;", unicode: "📺" },
    { name: "dvd", htmlCode: "&#128192;", unicode: "📀" },
    { name: "magnifying-glass", htmlCode: "&#128269;", unicode: "🔍" },
    { name: "light-bulb", htmlCode: "&#128161;", unicode: "💡" },
    { name: "flashlight", htmlCode: "&#128294;", unicode: "🔦" },
    { name: "bell", htmlCode: "&#128276;", unicode: "🔔" },
    { name: "lock", htmlCode: "&#128274;", unicode: "🔒" },
    { name: "key", htmlCode: "&#128273;", unicode: "🔑" },
    { name: "scissors", htmlCode: "&#9986;", unicode: "✂️" },
    { name: "hammer", htmlCode: "&#128296;", unicode: "🔨" },
    { name: "wrench", htmlCode: "&#128295;", unicode: "🔧" },
    { name: "screwdriver", htmlCode: "&#129691;", unicode: "🪛" },
    { name: "link", htmlCode: "&#128279;", unicode: "🔗" },
    { name: "paperclip", htmlCode: "&#128206;", unicode: "📎" },
    { name: "pencil", htmlCode: "&#9999;", unicode: "✏️" }
  ]
};

export default emojiData;