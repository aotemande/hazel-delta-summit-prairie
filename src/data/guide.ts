export type TravelMode =
  | "walk"
  | "mtr"
  | "tram"
  | "bus"
  | "ferry"
  | "taxi"
  | "funicular"
  | "minibus";

export type MapKind =
  | "overview"
  | "peak"
  | "icac"
  | "disney"
  | "harbour"
  | "central"
  | "mongkok"
  | "ferry"
  | "temple"
  | "wanchai"
  | "jordan";

export interface RouteStep {
  mode: TravelMode;
  text: string;
  time?: string;
  cost?: string;
}

export interface PhotoSpot {
  name: string;
  how: string;
  shot: string;
}

export interface Eat {
  name: string;
  dish: string;
  address: string;
  metro: string;
  price: string;
  hours?: string;
  book?: string;
  note: string;
  area?: string;
  slot?: "早餐" | "午餐" | "下午茶" | "晚餐" | "咖啡" | "甜品" | "伴手礼";
  day?: 1 | 2 | 3 | 0;
  order?: string;
}

export interface HoursRow {
  when: string;
  open: string;
}

export interface Spot {
  id: string;
  name: string;
  english: string;
  area: string;
  image: string;
  imageCaption?: string;
  hours: string;
  hoursRows?: HoursRow[];
  fee: string;
  duration: string;
  address: string;
  metro: string;
  exit?: string;
  walk?: string;
  book?: string;
  summary: string;
  routeTitle: string;
  routeFrom: string;
  steps: RouteStep[];
  play: string[];
  photos?: PhotoSpot[];
  tips: string[];
  eats?: Eat[];
  food?: string[];
  mapKind: MapKind;
  mustSee?: boolean;
}

export interface DayItem {
  time: string;
  spotId: string;
  title: string;
  note: string;
  eat?: string;
}

export interface DayPlan {
  id: 1 | 2 | 3;
  name: string;
  kicker: string;
  subtitle: string;
  image: string;
  distance: string;
  zone: string;
  items: DayItem[];
}

export interface DayStop {
  n: number;
  name: string;
  how: string;
  zone: "港岛" | "九龙" | "大屿山";
}

export const MODE_LABEL: Record<TravelMode, string> = {
  walk: "步行",
  mtr: "港铁",
  tram: "电车",
  bus: "巴士",
  ferry: "渡轮",
  taxi: "的士",
  funicular: "缆车",
  minibus: "小巴",
};

export const dayFlows: Record<1 | 2 | 3, { blurb: string; stops: DayStop[] }> = {
  1: {
    blurb: "全天几乎都在港岛。晚上才坐天星小轮过海，到尖沙咀看维港。",
    stops: [
      { n: 1, name: "中环老街早餐", how: "港铁中环 D2", zone: "港岛" },
      { n: 2, name: "文武庙 · 石板街 · 大馆", how: "全程步行", zone: "港岛" },
      { n: 3, name: "叮叮车去湾仔 / Bakehouse", how: "德辅道中上车", zone: "港岛" },
      { n: 4, name: "山顶缆车 → 太平山夜景", how: "中环 J2 出闸", zone: "港岛" },
      { n: 5, name: "天星小轮 → 尖沙咀维港", how: "中环码头上层", zone: "九龙" },
    ],
  },
  2: {
    blurb: "上午旺角，中午过海去北角赶廉署 14:00 开门。傍晚回九龙庙街，晚上尖沙咀看灯光秀。",
    stops: [
      { n: 1, name: "旺角金华冰厅 + 街区", how: "旺角站 E2 / D2", zone: "九龙" },
      { n: 2, name: "港铁过海 → 北角廉署", how: "金钟转港岛线", zone: "港岛" },
      { n: 3, name: "展览厅 + 一九七四咖啡", how: "北角 A1 沿渣华道", zone: "港岛" },
      { n: 4, name: "庙街夜市晚饭", how: "油麻地 C", zone: "九龙" },
      { n: 5, name: "星光大道 · 幻彩咏香江", how: "尖东 J", zone: "九龙" },
    ],
  },
  3: {
    blurb: "整日留在大屿山乐园。不要再塞市区景点。",
    stops: [
      { n: 1, name: "酒店出发上港铁", how: "尖沙咀 / 中环", zone: "九龙" },
      { n: 2, name: "荔景转东涌线", how: "往东涌方向", zone: "大屿山" },
      { n: 3, name: "欣澳转迪士尼线", how: "专用短线", zone: "大屿山" },
      { n: 4, name: "迪士尼站出闸入园", how: "通道直达正门", zone: "大屿山" },
      { n: 5, name: "玩到光影秀再返市区", how: "原路港铁", zone: "九龙" },
    ],
  },
};

export { spots, spotById, days } from "./spots";

export interface DayMeal {
  time: string;
  slot: string;
  name: string;
  order: string;
  where: string;
  alt: string;
}

export const mealPlan: { day: 1 | 2 | 3; title: string; hint: string; meals: DayMeal[] }[] = [
  {
    day: 1,
    title: "港岛日",
    hint: "跟着步行路线吃，不为一家店打车跨区。",
    meals: [
      {
        time: "08:30",
        slot: "早餐",
        name: "兰芳园 + 泰昌饼家",
        order: "丝袜奶茶（可少甜）+ 菠萝油；再买两只刚出炉蛋挞边走边吃。",
        where: "中环 D2 → 阁麟街 2A（近结志街）／摆花街 35 号",
        alt: "兰芳园周日休息。改泰昌买蛋挞，早餐换附近茶餐厅或翠华。",
      },
      {
        time: "12:30",
        slot: "午餐",
        name: "中环街市（首选）",
        order: "鱼蛋、碗仔翅或简餐。图的是快、有洗手间和空调。",
        where: "大馆下山 5 分钟，德辅道中 80 号",
        alt: "想吃一顿正经的：一乐烧鹅（士丹利街，点鹅腿）或九记牛腩（威灵顿街 89 号）。两家都不预约，11:30 前或 13:30 后人少。",
      },
      {
        time: "15:10",
        slot: "下午茶",
        name: "Bakehouse 湾仔旗舰",
        order: "酸种蛋挞立刻吃；可颂打包上山当缆车前垫饥。",
        where: "湾仔大王东街 14 号。湾仔 B2 出闸步行约 4 分钟",
        alt: "蛋挞售完可预订下一炉。也可改尖沙咀汉口道 44 号外带店（第二天晚上也方便）。",
      },
      {
        time: "山顶",
        slot: "垫饥",
        name: "山顶广场美食层 / 便利店",
        order: "关东煮、三明治即可。不要在凌霄阁吃贵套餐。",
        where: "出缆车先去卢吉道，吃放在天黑前",
        alt: "Bakehouse 可颂就是为此留的。",
      },
    ],
  },
  {
    day: 2,
    title: "九龙与北角",
    hint: "午餐 12:30 前结束，13:20 必须上港铁赶廉署 14:00 开门。",
    meals: [
      {
        time: "09:00",
        slot: "早餐",
        name: "金华冰厅",
        order: "菠萝油 + 冻奶茶。店小，外带也完全成立。",
        where: "旺角 E2 向南 3 分钟，花园街 47 号",
        alt: "想吃滑蛋：改去佐敦澳洲牛奶公司（C2，只收现金，周四公休），再港铁回旺角逛街。",
      },
      {
        time: "12:00",
        slot: "午餐",
        name: "添好运朗豪坊 或 富临皇宫",
        order: "添好运：叉烧包、虾饺、萝卜糕，现场取筹。富临：正经早茶，三人以上建议电话订。",
        where: "旺角 C3 通道 / E1，12:30 前吃完",
        alt: "排队太长就买个菠萝油当午饭，把时间留给廉署。",
      },
      {
        time: "13:40",
        slot: "过海前",
        name: "渣华道市政大厦熟食",
        order: "云吞面、茶餐厅。展览厅平日 14:00 才开，早到先在 99 号 2 楼吃。",
        where: "北角 A1 沿渣华道往 303 号的路上",
        alt: "旺角已经吃饱可跳过。",
      },
      {
        time: "16:00",
        slot: "咖啡",
        name: "一九七四咖啡厅",
        order: "点「廉署咖啡」。国庆月打卡 303 巴士站布景、路牌、广角镜。",
        where: "渣华道 303 号大楼地下，看完 2 楼展坐电梯下来",
        alt: "17:00 关店。16:00 必须离开展厅。周日及公众假期休息。",
      },
      {
        time: "18:30",
        slot: "晚餐",
        name: "庙街大排档",
        order: "炒蟹、炒油菜、冻柠茶；或碗仔翅、鸡蛋仔当小吃。",
        where: "油麻地 C，庙街近众坊街",
        alt: "不想坐塑料凳：佐敦澳牛或麦文记鲜虾云吞面。19:30 必须结账去尖沙咀抢灯光秀。",
      },
    ],
  },
  {
    day: 3,
    title: "迪士尼日",
    hint: "园内解决三餐，不要中午跑回市区。",
    meals: [
      {
        time: "出酒店",
        slot: "早餐",
        name: "酒店或便利店",
        order: "简单吃。开园后先排队不是先吃饭。",
        where: "酒店 / 沿路 7-11",
        alt: "—",
      },
      {
        time: "11:30 或 14:00",
        slot: "午餐",
        name: "园区餐厅",
        order: "避开 12:00–13:00 整点。套餐券常省 15–25%。可带未开封瓶装水。",
        where: "幻想世界或美国小镇大街",
        alt: "—",
      },
      {
        time: "散场",
        slot: "晚餐",
        name: "园内或回尖沙咀",
        order: "光影秀后再吃。尖沙咀华星冰室、正斗粥面晚上还开。",
        where: "视闭园时间",
        alt: "—",
      },
    ],
  },
];

export const restaurants: Eat[] = [
  {
    name: "兰芳园（阁麟街总店）",
    dish: "丝袜奶茶、菠萝油",
    address: "中环阁麟街 2 号 A 地铺（与结志街交界）",
    metro: "中环站 D2，沿皇后大道中往西，左上阁麟街",
    price: "人均 HK$40–60",
    hours: "周一至六约 07:00–18:00，周日休息",
    book: "不预约",
    note: "第一天 08:30 到。单人坐吧台最快。奶茶可说少甜。周日休，改泰昌或翠华。",
    area: "中环",
    slot: "早餐",
    day: 1,
    order: "丝袜奶茶 + 菠萝油。想吃正餐再加猪扒包。",
  },
  {
    name: "泰昌饼家（摆花街）",
    dish: "酥皮蛋挞",
    address: "中环摆花街 35 号",
    metro: "中环 D2 步行 5 分钟，与兰芳园同巷",
    price: "约 HK$10/只",
    hours: "上午至傍晚，售完即止",
    book: "不预约",
    note: "和兰芳园同巷。热的才酥。可一次买两只边走边吃。",
    area: "中环",
    slot: "早餐",
    day: 1,
    order: "原味蛋挞，出炉时买。",
  },
  {
    name: "一乐烧鹅（士丹利街）",
    dish: "烧鹅腿、油鸡",
    address: "中环士丹利街 34–38 号",
    metro: "中环 D2 沿士丹利街约 6 分钟",
    price: "人均 HK$80–120",
    hours: "约 10:00–20:30，卖完提早收",
    book: "不预约，11:30 前或 13:30 后",
    note: "第一天想吃正餐可换掉中环街市。点鹅腿，不要点一大只。",
    area: "中环",
    slot: "午餐",
    day: 1,
    order: "烧鹅腿 + 白饭或捞面。",
  },
  {
    name: "九记牛腩",
    dish: "牛腩粉 / 面、牛筋",
    address: "中环威灵顿街 89 号",
    metro: "中环 D2 沿威灵顿街约 7 分钟",
    price: "人均 HK$70–100",
    hours: "午市为主，售完即止",
    book: "不预约，开门就去或过了 13:30",
    note: "一乐的替代。汤底浓，配菜点牛筋。店小翻台快。",
    area: "中环",
    slot: "午餐",
    day: 1,
    order: "牛腩面加牛筋。",
  },
  {
    name: "中环街市小食",
    dish: "鱼蛋、碗仔翅、简餐",
    address: "中环德辅道中 80 号",
    metro: "中环 A，大馆下山 5 分钟",
    price: "小食 HK$20–60",
    hours: "店铺约 11:00–20:00",
    book: "即到",
    note: "第一天午餐中转，有洗手间和空调。吃完出门就是叮叮东行站。",
    area: "中环",
    slot: "午餐",
    day: 1,
    order: "鱼蛋或简餐，12:30 前吃完。",
  },
  {
    name: "Bakehouse（湾仔旗舰）",
    dish: "酸种蛋挞、可颂",
    address: "湾仔大王东街 14 号地铺",
    metro: "湾仔 B2 步行约 4 分钟",
    price: "人均 HK$50–80，蛋挞约 HK$12–20/只",
    hours: "08:00–21:00；堂食约至 18:00",
    book: "不预约。蛋挞售完可预订下一炉",
    note: "湾仔旗舰可堂食。中环士丹顿街 5 号、尖沙咀汉口道 44 号只外带。和泰昌是两种蛋挞，值得都吃。",
    area: "湾仔",
    slot: "下午茶",
    day: 1,
    order: "酸种蛋挞立刻吃；可颂打包上山。",
  },
  {
    name: "金华冰厅",
    dish: "菠萝油、冻奶茶",
    address: "旺角花园街 47 号",
    metro: "旺角 E2 向南 3 分钟",
    price: "人均 HK$40–70",
    hours: "约 07:00–17:30",
    book: "不预约",
    note: "第二天早餐首选。外带窗口人少一些。",
    area: "旺角",
    slot: "早餐",
    day: 2,
    order: "菠萝油 + 冻奶茶。",
  },
  {
    name: "富临皇宫（旺角）",
    dish: "虾饺、烧卖、叉烧包",
    address: "旺角弼街 1 号",
    metro: "旺角 E1",
    price: "人均 HK$80–130",
    hours: "早茶约 07:00–16:00",
    book: "电话或取筹，3 人以上建议先订",
    note: "正经点心。中午还要过海，不要点太多。",
    area: "旺角",
    slot: "午餐",
    day: 2,
    order: "虾饺、烧卖、叉烧包各一笼即止。",
  },
  {
    name: "添好运（朗豪坊）",
    dish: "叉烧包、虾饺、萝卜糕",
    address: "旺角朗豪坊 8 楼",
    metro: "旺角 C3 通道",
    price: "人均 HK$70–100",
    hours: "约 10:00–21:00",
    book: "现场取筹",
    note: "12:00 前吃完，13:20 上港铁。",
    area: "旺角",
    slot: "午餐",
    day: 2,
    order: "叉烧包必点，再加虾饺、萝卜糕。",
  },
  {
    name: "澳洲牛奶公司",
    dish: "炒蛋多士、蛋白炖鲜奶",
    address: "佐敦白加士街 47–49 号",
    metro: "佐敦 C2 步行 2 分钟",
    price: "人均 HK$50–80，只收现金",
    hours: "07:30–22:00，周四公休",
    book: "不预约，门口排队拼桌，翻台极快",
    note: "第二天备选早餐或庙街前加餐。点菜一次说完。不要点太多，上菜不到一分钟。",
    area: "佐敦",
    slot: "早餐",
    day: 2,
    order: "炒蛋多士 + 蛋白炖鲜奶。可把煎蛋改成炒蛋。",
  },
  {
    name: "麦文记面家",
    dish: "鲜虾云吞面",
    address: "佐敦宝灵街 53 号",
    metro: "佐敦 C2，近澳洲牛奶公司",
    price: "人均 HK$50–80",
    hours: "午市至晚市，以店门为准",
    book: "不预约",
    note: "庙街不想坐大排档时的替代。皮薄馅鲜。",
    area: "佐敦",
    slot: "晚餐",
    day: 2,
    order: "鲜虾云吞面。",
  },
  {
    name: "渣华道市政大厦熟食",
    dish: "云吞面、茶餐厅",
    address: "北角渣华道 99 号 2 楼",
    metro: "北角 A1，去廉署路上",
    price: "人均 HK$40–70",
    hours: "档口约 06:00–20:00",
    book: "不预约",
    note: "展览厅 14:00 才开，先在这里吃过午饭再排队。",
    area: "北角",
    slot: "午餐",
    day: 2,
    order: "云吞面或茶餐厅套餐。",
  },
  {
    name: "一九七四咖啡厅",
    dish: "廉署咖啡",
    address: "北角渣华道 303 号大楼地下",
    metro: "北角 A1 沿渣华道 8–10 分钟",
    price: "咖啡约 HK$40–60",
    hours: "周一至六 10:00–17:00；周日及公众假期休息",
    book: "无需预约",
    note: "先看展再下来。国庆月有 303 巴士站布景、广角镜、打卡墙。文创先到先得。",
    area: "北角",
    slot: "咖啡",
    day: 2,
    order: "廉署咖啡。国庆月问有无限定集印卡。",
  },
  {
    name: "庙街大排档",
    dish: "炒蟹、碗仔翅、冻柠茶",
    address: "油麻地庙街近众坊街",
    metro: "油麻地 C",
    price: "人均 HK$80–150",
    hours: "约 17:00–23:00",
    book: "不预约",
    note: "19:30 必须结账去尖沙咀抢灯光秀。选本地人多的档，拒绝卡拉 OK 拉客。",
    area: "油麻地",
    slot: "晚餐",
    day: 2,
    order: "炒蟹或炒油菜 + 冻柠茶。小吃可加碗仔翅、鸡蛋仔。",
  },
  {
    name: "佳佳甜品",
    dish: "杨枝甘露、芒果糯米",
    address: "旺角花园街一带，地图搜「佳佳甜品」",
    metro: "旺角 E2，金华冰厅附近",
    price: "人均 HK$30–50",
    hours: "下午至晚上",
    book: "不预约",
    note: "金华吃完若还想吃甜，顺路。不是行程必须。",
    area: "旺角",
    slot: "甜品",
    day: 2,
    order: "杨枝甘露。",
  },
  {
    name: "华星冰室（尖沙咀）",
    dish: "冰室套餐、奶茶",
    address: "尖沙咀，地图搜「华星冰室」",
    metro: "尖沙咀站",
    price: "人均 HK$60–90",
    hours: "午市至晚市",
    book: "不预约",
    note: "迪士尼回来或灯光秀后的茶餐厅备份。",
    area: "尖沙咀",
    slot: "晚餐",
    day: 3,
    order: "奶茶 + 常餐。",
  },
  {
    name: "奇华饼家（海港城）",
    dish: "蛋卷、蝴蝶酥",
    address: "尖沙咀海港城多处柜位",
    metro: "尖沙咀 E 或星光大道向西步行",
    price: "礼盒约 HK$80 起",
    hours: "商场约 10:00–22:00",
    book: "即买",
    note: "灯光秀后买伴手礼。月饼季再看美心。不要在机场买，贵一截。",
    area: "尖沙咀",
    slot: "伴手礼",
    day: 2,
    order: "原味蛋卷。",
  },
];

export const packing = {
  documents: [
    "护照，或内地居民往来港澳通行证 + 有效赴港签注",
    "回程机票 / 高铁票截图与电子登机牌",
    "酒店订单、迪士尼门票（含入园预约）、山顶缆车电子票下载到相册",
    "信用卡 Visa / Mastercard，再带一张银联兜底",
    "港币现金 HK$300–800：的士、澳牛、街市、大排档",
    "身份证备份照片与纸质复印件分开放",
  ],
  electronics: [
    "手机 + 充电宝 ≥10000mAh",
    "英标三脚转换插头 Type G，香港 220V",
    "充电线、耳机",
    "eSIM 提前安装",
  ],
  clothes: [
    "最舒服的步行鞋 + 一双可换。迪士尼日禁止新鞋",
    "薄外套：港铁、茶餐厅、山顶都冷",
    "10–3 月一件毛衣；5–9 月速干短袖 + 折叠雨衣",
    "防晒帽、墨镜、防晒霜",
  ],
  health: [
    "感冒、肠胃、创可贴、自己的处方药",
    "口罩：文武庙盘香、旺角人潮",
    "夏夜驱蚊",
  ],
  others: ["轻量双肩包", "环保袋", "湿纸巾", "不要带刀具过安检"],
};

export interface AppItem {
  name: string;
  maker: string;
  why: string;
  must: boolean;
  category: string;
}

export const apps: AppItem[] = [
  {
    name: "旅客八达通 / Octopus",
    maker: "八达通卡有限公司",
    why: "港铁、巴士、电车、天星、7-11 一拍即走。出发前下载，落地有网立刻开通。",
    must: true,
    category: "支付交通",
  },
  {
    name: "MTR Mobile",
    maker: "港铁",
    why: "路线、车费、首末班、出口。金钟转乘没有它容易走错层。",
    must: true,
    category: "导航",
  },
  {
    name: "香港出行易 HKeMobility",
    maker: "运输署",
    why: "巴士、小巴、渡轮实时到站。",
    must: true,
    category: "导航",
  },
  {
    name: "Google 地图",
    maker: "Google",
    why: "香港没有墙。出发前下载离线「香港」。阁麟街、渣华道、卢吉道都靠它。",
    must: true,
    category: "导航",
  },
  {
    name: "香港迪士尼乐园",
    maker: "乐园官方",
    why: "排队、演出、地图、部分预约。",
    must: true,
    category: "门票",
  },
  {
    name: "OpenRice 开饭喇",
    maker: "OpenRice",
    why: "本地餐厅点评。富临、添好运取筹也常看这里。",
    must: true,
    category: "美食",
  },
  {
    name: "Klook / Trip.com",
    maker: "客路 / 携程国际",
    why: "迪士尼、山顶缆车、机场快线、eSIM。",
    must: true,
    category: "门票",
  },
  {
    name: "MyObservatory 天文台",
    maker: "香港天文台",
    why: "八号风球会停渡轮、影响缆车和廉署。",
    must: true,
    category: "出行",
  },
  {
    name: "Uber / HKTaxi",
    maker: "各家",
    why: "山顶不想排队、行李多、深夜机场。",
    must: false,
    category: "打车",
  },
  {
    name: "AlipayHK 或 WeChat Pay HK",
    maker: "支付宝 / 腾讯",
    why: "香港钱包，不是内地版直接刷。八达通仍是第一优先。",
    must: false,
    category: "支付交通",
  },
];

export const transportNotes = {
  airport: [
    "机场快线：机场 → 九龙站约 21 分钟、香港站约 24 分钟，单程约 HK$115。",
    "城巴 A21 往尖沙咀、旺角，有行李架，约 HK$40–45。",
    "的士机场往尖沙咀约 HK$280–350。",
  ],
  mtr: [
    "过海用荃湾线。去北角：金钟转港岛线往柴湾。",
    "出口：中环 J2 缆车、D2 阁麟街；北角 A1 渣华道；油麻地 C 庙街；尖东 J 星光大道；旺角 E2 金华。",
    "迪士尼线只在欣澳接。不要在东涌下车。",
  ],
  bus: [
    "15 路中环交易广场 → 山顶。绿色小巴 1 号香港站 E 出口上山顶。",
    "小巴要提前喊「有落」。",
  ],
  taxi: [
    "红的市区、绿的新界、蓝的大屿山。一定打表。过海隧道费通常乘客出。",
  ],
  ferryTram: [
    "天星走上层。叮叮上车往后拍卡。东行去湾仔，西行去上环。",
  ],
  network: [
    "香港没有墙。出发前装 eSIM。内地号码关掉数据漫游。",
  ],
};

export const notices = [
  "票价、班次、开园与灯光秀会调整，以官方当日公布为准。",
  "廉署展览厅周日及公众假期关闭，平日 14:00 才开门；无需预约，现场排队。2026 年 10 月 1–3、5–7 日特别开放，10 月 4 日仍休息。",
  "澳洲牛奶公司只收现金且周四公休。餐厅排队情况以到店为准。",
];
