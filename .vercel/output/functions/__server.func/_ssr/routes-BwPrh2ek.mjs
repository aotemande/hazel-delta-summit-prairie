import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { S as ArrowRight, _ as CarFront, b as Bus, c as Smartphone, d as Navigation, f as MapPin, g as Clock, h as CreditCard, i as Utensils, l as Ship, m as DoorOpen, n as Wifi, o as TrainFront, p as Footprints, r as Wallet, s as Ticket, t as X, u as Phone, v as Camera, x as Backpack, y as CalendarClock } from "../_libs/lucide-react.mjs";
import { a as DialogPortal, i as DialogOverlay, n as DialogClose, o as DialogTitle, r as DialogContent, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BwPrh2ek.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var spots = [
	{
		id: "lanfong",
		name: "中环茶餐厅早餐",
		english: "Lan Fong Yuen & Tai Cheong",
		area: "中环",
		image: "/images/taikwun.jpg",
		hours: "兰芳园周一至六约 07:00–18:00（周日休息）；泰昌上午至傍晚，售完即止",
		fee: "人均 HK$40–80",
		duration: "40–60 分钟",
		address: "中环阁麟街 2 号 A（兰芳园，近结志街）／摆花街 35 号（泰昌饼家）",
		metro: "港铁中环站 D2",
		exit: "中环站 D2（勿走 J 口，那是去缆车的）",
		walk: "D2 出闸上到皇后大道中，面朝西（上环方向）走约 2 分钟，左拐上阁麟街。兰芳园在 2 号 A，极窄的铺面。蛋挞再沿街走到摆花街 35 号泰昌。",
		book: "两家都不接受预约。08:30 到基本不用排。兰芳园周日休息，改泰昌或附近茶餐厅。",
		summary: "香港早晨从一杯丝袜奶茶开始。阁麟街这条上山巷把兰芳园、泰昌饼家和半山扶梯下口串在 200 米里，是港岛日最顺的起点。",
		routeTitle: "尖沙咀酒店 → 中环 D2 → 阁麟街",
		routeFrom: "尖沙咀站",
		steps: [
			{
				mode: "walk",
				text: "酒店步行至尖沙咀站，约 5–10 分钟。",
				time: "8 分钟"
			},
			{
				mode: "mtr",
				text: "荃湾线往中环，尖沙咀 → 金钟 → 中环，2 站。出闸找 D2，不要跟人群走 A 或 J。",
				time: "8 分钟",
				cost: "约 HK$5–9"
			},
			{
				mode: "walk",
				text: "D2 出到皇后大道中 → 西行 → 左上阁麟街。兰芳园门口常有一小列人。",
				time: "3 分钟"
			}
		],
		play: [
			"先兰芳园：丝袜奶茶 + 菠萝油。单人坐吧台，双人拼小桌。奶茶可说「少甜」。",
			"再走 2 分钟到泰昌买两只蛋挞，热的才酥，装纸袋边走边吃。",
			"吃完不要打车。沿荷李活道往上环方向 6 分钟就是文武庙。",
			"澳洲牛奶公司在佐敦不在中环，不要第一天跑去九龙，留到第二天备选。"
		],
		photos: [{
			name: "阁麟街巷口",
			how: "退到皇后大道中路口，用竖构图把招牌和上山台阶一起收进去。",
			shot: "港式茶餐厅巷、红栏杆、行人。不要挡店门口。"
		}, {
			name: "吧台奶茶特写",
			how: "靠窗吧台，侧光。",
			shot: "丝袜奶茶拉出的泡沫、菠萝油切开面。"
		}],
		tips: [
			"现金与八达通都常用；不要默认内地支付宝。",
			"空调很冷，薄外套不要收进行李。",
			"店员会催，点菜一次说完。"
		],
		eats: [{
			name: "兰芳园",
			dish: "丝袜奶茶、菠萝油",
			address: "阁麟街 2 号 A",
			metro: "中环 D2",
			price: "HK$40–60",
			book: "不预约",
			note: "总店比机场分店正宗。"
		}, {
			name: "泰昌饼家",
			dish: "酥皮蛋挞",
			address: "摆花街 35 号",
			metro: "中环 D2 步行 5 分钟",
			price: "约 HK$10/只",
			book: "不预约",
			note: "出炉时买。"
		}],
		mapKind: "central"
	},
	{
		id: "manmo",
		name: "文武庙",
		english: "Man Mo Temple",
		area: "上环 / 中环",
		image: "/images/taikwun.jpg",
		hours: "约 08:00–18:00，以庙门告示为准",
		fee: "免费（香油随缘）",
		duration: "30–40 分钟",
		address: "上环荷李活道 124–126 号",
		metro: "上环站 A2，或中环 D2 步行约 10 分钟",
		exit: "若从中环走过来不用再进站；专程来做出上环 A2，沿荷李活道向东。",
		walk: "兰芳园出门左转到荷李活道，面朝上环（西）走，路过半山扶梯下口后约 2 分钟，红柱绿瓦即是庙门。门牌 124–126。",
		book: "无需预约，免费进入。",
		summary: "1847 年前后的文昌、武帝合祀庙。巨型盘香从梁上垂到视线高度，是港岛最有烟火气的中式庙宇。",
		routeTitle: "阁麟街 → 荷李活道 124 号",
		routeFrom: "兰芳园",
		steps: [{
			mode: "walk",
			text: "出店左转到荷李活道向西，过半山扶梯下口，右手边红墙绿瓦。",
			time: "6–8 分钟"
		}],
		play: [
			"进门先抬头看盘香，直径可达一米，烟在梁间转。",
			"左侧文昌（学业），右侧武帝（忠义）。游客可默立，不必强行上香。",
			"侧殿石碑停 5 分钟。拍完沿荷李活道古董店再走 2 分钟到石板街。"
		],
		photos: [{
			name: "盘香仰拍",
			how: "进门两步，手机朝正上方，关闭闪光灯。",
			shot: "螺旋盘香、烟、梁木。人少时清晨最好。"
		}, {
			name: "庙门外观",
			how: "退到马路对面，等车流空隙。",
			shot: "绿瓦、石狮、荷李活道招牌层叠。"
		}],
		tips: [
			"烟浓，口罩自备。",
			"短热裤进庙拍照不礼貌。",
			"不要给「强制讲解」的人付钱。"
		],
		mapKind: "central"
	},
	{
		id: "pottinger",
		name: "石板街",
		english: "Pottinger Street",
		area: "中环",
		image: "/images/taikwun.jpg",
		hours: "街道全天",
		fee: "免费",
		duration: "15–20 分钟",
		address: "中环砵典乍街（石板街），连接皇后大道中与荷李活道",
		metro: "中环 D2 步行 5 分钟",
		exit: "中环 D2",
		walk: "文武庙出来沿荷李活道往回（向中环）走约 4 分钟，左下石阶就是砵典乍街。也可以从皇后大道中直接爬上去。",
		book: "无",
		summary: "全是花岗岩石阶的百年街道，两边卖纪念品、戏服和发夹。坡度陡，是中环最像「港片开场」的 80 米。",
		routeTitle: "文武庙 → 石板街 → 半山扶梯",
		routeFrom: "荷李活道 124 号",
		steps: [{
			mode: "walk",
			text: "荷李活道向东走，见到石阶往下即是。拍完从下端接到皇后大道中，再走回半山扶梯入口。",
			time: "10 分钟"
		}],
		play: [
			"从顶端往下拍，台阶呈透视。",
			"不要在台阶中间停太久，送货的会推车上来。",
			"旁边就是半山扶梯，10:00 后扶梯改上行，对上大馆的方向。"
		],
		photos: [{
			name: "石阶俯拍",
			how: "站在荷李活道一端最高阶，镜头略俯。",
			shot: "石板纹理、两边店铺、远处高楼。"
		}, {
			name: "低机位",
			how: "蹲在中段，等行人走过。",
			shot: "脚和石阶，港风电影感。"
		}],
		tips: ["雨天石板极滑。", "假货多，当布景看即可。"],
		mapKind: "central"
	},
	{
		id: "escalator",
		name: "中环至半山自动扶梯",
		english: "Mid-Levels Escalator",
		area: "中环 / 苏豪",
		image: "/images/taikwun.jpg",
		hours: "下行 06:00–10:00；上行 10:00–24:00",
		fee: "免费",
		duration: "20–40 分钟",
		address: "皇后大道中近阁麟街起，向半山延伸约 800 米",
		metro: "中环 D2",
		exit: "中环 D2",
		walk: "石板街或文武庙回到荷李活道，扶梯廊有盖，入口就在荷李活道与阁麟街附近。看地上「中环至半山自动扶梯系统」标。",
		book: "无",
		summary: "全球最长室外有盖扶梯。10:00 前向下（方便上班），之后整日向上。走错方向会白走。",
		routeTitle: "荷李活道 → 扶梯 → 士丹顿街 → 大馆",
		routeFrom: "石板街 / 文武庙",
		steps: [{
			mode: "walk",
			text: "10:00 后以上行为准。在士丹顿街下扶梯进苏豪，再沿奥卑利街去大馆。",
			time: "15–25 分钟"
		}],
		play: [
			"分段衔接，中间要走过街平台，不是坏了。",
			"苏豪壁画和石板路适合拍建筑，不必每家咖啡都进。",
			"到士丹顿街必须下扶梯，否则会一直爬到半山住宅。"
		],
		photos: [{
			name: "扶梯透视",
			how: "站在一段起点往后拍，收进有盖廊和行人。",
			shot: "重复的扶手、招牌从侧面掠过。"
		}],
		tips: ["背包转到身前。", "不要在扶梯上停步自拍挡路。"],
		mapKind: "central"
	},
	{
		id: "taikwun",
		name: "大馆",
		english: "Tai Kwun",
		area: "中环",
		image: "/images/taikwun.jpg",
		hours: "园区约 11:00–23:00；部分展馆周休息，以现场为准",
		fee: "园区免费，特展另行收费",
		duration: "1–1.5 小时",
		address: "中环荷李活道 10 号",
		metro: "中环 D2 步行约 8 分钟",
		exit: "中环 D2",
		walk: "士丹顿街沿奥卑利街下行，或荷李活道 10 号正门。多个入口，荷李活道那扇铁闸最好认。",
		book: "园区免预约。监狱展览等热门展或需现场扫码取免费票，官网 Tai Kwun 可先看档期。",
		summary: "前中区警署、中央裁判司署与维多利亚监狱。砖拱、石墙和当代艺术叠在一起，是中环必留的一段。",
		routeTitle: "半山扶梯 → 荷李活道 10 号",
		routeFrom: "士丹顿街",
		steps: [{
			mode: "walk",
			text: "奥卑利街下行或荷李活道正门。入园看平面图。",
			time: "5–8 分钟"
		}],
		play: [
			"动线：营房 → 监狱展览 → 裁判司署，少走回头路。",
			"「监狱经历」约 30–40 分钟，是最值得的室内段。",
			"砖拱走廊傍晚光线最好。饿了去中环街市，不要在园区吃太贵的一餐。"
		],
		photos: [{
			name: "监狱广场",
			how: "中庭四周有回廊，站二层往下拍。",
			shot: "红砖、拱、人群尺度。"
		}, {
			name: "旧警署立面",
			how: "荷李活道门外退到马路对面。",
			shot: "殖民时期立面和现代高楼对比。"
		}],
		tips: ["石板路，穿舒服鞋。", "周日展馆较早关。"],
		eats: [{
			name: "中环街市",
			dish: "鱼蛋、咖啡、简餐",
			address: "德辅道中 80 号",
			metro: "大馆步行 5 分钟下山",
			price: "HK$20–80",
			book: "即到",
			note: "有洗手间和空调。"
		}],
		mapKind: "central"
	},
	{
		id: "markets",
		name: "中环街市",
		english: "Central Market",
		area: "中环",
		image: "/images/taikwun.jpg",
		hours: "大楼白天至晚上，店铺约 11:00–20:00",
		fee: "免费进入",
		duration: "30–45 分钟（含午餐）",
		address: "中环德辅道中 80 号",
		metro: "中环 A 出口或香港站",
		exit: "中环 A；从大馆走下来不用进站",
		walk: "大馆出荷李活道正门，沿楼梯或坡道向北下山，过皇后大道中即到德辅道中街市大楼。约 5 分钟。",
		book: "无。个别餐厅 OpenRice 订位。",
		summary: "活化后的包浩斯街市，连着半山扶梯下段。当午餐、洗手间、冷气中转，比在兰桂坊找位快。",
		routeTitle: "大馆 → 中环街市午餐",
		routeFrom: "荷李活道 10 号",
		steps: [{
			mode: "walk",
			text: "下山过皇后大道中，街市在德辅道中。吃完从地面去叮叮车站。",
			time: "5 分钟"
		}],
		play: [
			"二楼走廊拍街市中庭。",
			"午餐选档口或简餐，12:30 前吃完。",
			"出街市就是德辅道中，往东是叮叮车往湾仔的方向。"
		],
		photos: [{
			name: "中庭",
			how: "二层栏杆处广角。",
			shot: "几何楼板、行人。"
		}],
		tips: ["这里解决厕所，上山以后不好找。"],
		eats: [
			{
				name: "中环街市档口",
				dish: "鱼蛋、碗仔翅、简餐",
				address: "德辅道中 80 号",
				metro: "中环 A",
				price: "HK$20–80",
				book: "即到",
				note: "12:30 前吃完去叮叮。"
			},
			{
				name: "一乐烧鹅",
				dish: "烧鹅腿",
				address: "士丹利街 34–38 号",
				metro: "中环 D2 沿士丹利街",
				price: "HK$80–120",
				book: "不预约",
				note: "想吃正餐再走几分钟。点鹅腿。"
			},
			{
				name: "九记牛腩",
				dish: "牛腩面加牛筋",
				address: "威灵顿街 89 号",
				metro: "中环 D2",
				price: "HK$70–100",
				book: "不预约",
				note: "一乐的替代。店小翻台快。"
			}
		],
		mapKind: "central"
	},
	{
		id: "tram",
		name: "叮叮车（香港电车）",
		english: "Hong Kong Tramways",
		area: "港岛北岸",
		image: "/images/star-ferry.jpg",
		hours: "约 06:00–00:00",
		fee: "不分远近约 HK$3.3，上车往后走拍八达通",
		duration: "中环到湾仔 15–20 分钟",
		address: "德辅道中沿线电车站",
		metro: "中环 A 到地面德辅道中",
		exit: "中环 A",
		walk: "街市出门就是德辅道中。找站牌写「筲箕湾 / 跑马地 / 湾仔」的东行站。西行会开去上环，坐反了。",
		book: "无。八达通拍卡。",
		summary: "1904 年起的双层电车。上层第一排是看街的最佳座位。",
		routeTitle: "德辅道中 → 湾仔修顿 / 轩尼诗道",
		routeFrom: "中环街市",
		steps: [{
			mode: "walk",
			text: "街市出门找东行叮叮站。",
			time: "3 分钟"
		}, {
			mode: "tram",
			text: "上车往后拍卡。在「修顿球场」或「湾仔」下车。",
			time: "15–20 分钟",
			cost: "约 HK$3.3"
		}],
		play: ["抢上层第一排。开窗拍骑楼和巴士。", "只坐到湾仔，不要坐到筲箕湾，下午要赶 Bakehouse 和缆车。"],
		photos: [{
			name: "上层前排",
			how: "镜头贴窗，快门略高。",
			shot: "招牌层叠、电车线。"
		}],
		tips: ["没有空调的旧车夏天很热，可等下一班。", "大行李不适合。"],
		mapKind: "harbour"
	},
	{
		id: "goldeneauhinia",
		name: "金紫荆广场",
		english: "Golden Bauhinia Square",
		area: "湾仔海滨",
		image: "/images/harbour-night.jpg",
		hours: "室外全天；升旗约 08:00",
		fee: "免费",
		duration: "20–30 分钟",
		address: "湾仔博览道 1 号，会展海滨",
		metro: "会展站 A3，或湾仔 A5 步行 10 分钟",
		exit: "会展站 A3 最近；从叮叮下车则走会议道向北",
		walk: "叮叮在修顿或轩尼诗道下车，向北穿过会议道、会展，广场在海边。约 8–12 分钟。",
		book: "无",
		summary: "回归纪念雕塑，真正的价值是免费看维港和对岸钟楼。停留不必久。",
		routeTitle: "湾仔电车 → 会展海滨 → Bakehouse",
		routeFrom: "湾仔叮叮站",
		steps: [{
			mode: "walk",
			text: "向北到会展海滨。拍完不要再坐叮叮回中环——先去 Bakehouse，再港铁回中环赶缆车。",
			time: "10 分钟"
		}],
		play: ["雕塑合影 5 分钟。把时间留给海和对岸尖沙咀。", "会展里有洗手间和便利店，上山前补水。"],
		photos: [{
			name: "金紫荆 + 维港",
			how: "站雕塑侧面，让对岸楼群在背景，不要贴脸自拍挡雕塑。",
			shot: "金花、海、钟楼。"
		}, {
			name: "海滨栏杆",
			how: "低机位，栏杆引导线指向中环 IFC。",
			shot: "日间维港层次。"
		}],
		tips: ["旅游团密集。", "8 号风球时海滨风极大。"],
		mapKind: "wanchai"
	},
	{
		id: "bakehouse",
		name: "Bakehouse 酸种蛋挞",
		english: "Bakehouse",
		area: "湾仔",
		image: "/images/taikwun.jpg",
		hours: "08:00–21:00，堂食约至 18:00；蛋挞常提前售罄",
		fee: "蛋挞约 HK$12–20/只，人均 HK$50–80",
		duration: "20–40 分钟（含排队）",
		address: "湾仔大王东街 14 号地铺（旗舰可堂食）",
		metro: "湾仔 B2 步行约 4 分钟",
		exit: "湾仔 B2。出闸向南走大王东街，红砖铺面即是。不要出 A3 再绕。",
		walk: "金紫荆往回走到轩尼诗道一带，再沿地图 8–10 分钟；或从湾仔 B2 出闸 4 分钟直达。看完海再买，路线不绕。",
		book: "不接受预约。想吃到，下午三点前到。售完可预订下一炉。",
		summary: "酸种蛋挞外皮有发酵香，和泰昌酥皮是两种东西。湾仔店是港岛日下午最顺的加站。",
		routeTitle: "金紫荆 → Bakehouse → 港铁回中环",
		routeFrom: "会展海滨",
		steps: [{
			mode: "walk",
			text: "海滨走回湾仔街区，地图搜 Bakehouse，大王东街 14 号。湾仔 B2 出闸约 4 分钟。",
			time: "10 分钟"
		}, {
			mode: "mtr",
			text: "买完去湾仔或会展站，坐港岛线一站回中环，出 J2 去缆车。不要再叮叮。",
			time: "10 分钟",
			cost: "约 HK$5–8"
		}],
		play: ["蛋挞各买一只立刻吃，凉了就普通了。", "可颂可打包上山当缆车前垫饥。"],
		photos: [{
			name: "蛋挞剖面",
			how: "出店立刻拍，自然光。",
			shot: "酥层和蛋液。"
		}],
		tips: ["售完没有补烤。", "不要为这家从中环专程跑第二次。"],
		eats: [{
			name: "Bakehouse",
			dish: "酸种蛋挞、可颂",
			address: "湾仔大王东街 14 号",
			metro: "湾仔 B2",
			price: "HK$50–80",
			book: "不预约，售完即止",
			note: "和泰昌蛋挞做对比才有意思。"
		}],
		mapKind: "wanchai"
	},
	{
		id: "peaktram",
		name: "山顶缆车",
		english: "Peak Tram",
		area: "中环 → 太平山",
		image: "/images/peak-tram.jpg",
		hours: "07:30–23:00，约每 10–15 分钟一班",
		fee: "成人来回 HK$116、单程 HK$82；小童/长者来回 HK$75。缆车+428 套票成人来回 HK$182（2025 年 12 月调整，以官网为准）",
		duration: "车程 8–9 分钟，排队另计",
		address: "中环花园道 33 号山顶缆车花园道总站",
		metro: "中环站 J2",
		exit: "中环站 J2（专属指示「山顶缆车」）。千万别出 D 口再走回去。",
		walk: "J2 出闸后有地面指示。沿花园道上坡，经过美国领事馆、圣约翰座堂，约 8–10 分钟到花园道 33 号。红白建筑即总站。",
		book: "务必提前在山顶缆车官网或 Klook 买电子票，走「已购票」通道。现场排队旺季 1–2 小时。套票含摩天台 428。",
		summary: "1888 年缆索铁路，最陡处超过 25 度。上山坐右侧，楼宇从平视变成鸟瞰。",
		routeTitle: "中环 J2 → 花园道 33 号 → 缆车上山",
		routeFrom: "港铁中环站 J2",
		steps: [
			{
				mode: "walk",
				text: "J2 出闸上花园道，8–10 分钟到总站。持电子票走已购票通道。",
				time: "10 分钟"
			},
			{
				mode: "funicular",
				text: "上车抢右侧（面朝山下的右边）。第 6 代车厢全景玻璃。",
				time: "8–9 分钟",
				cost: "成人来回 HK$116 起"
			},
			{
				mode: "bus",
				text: "备选：排队超过 40 分钟，改 15 路（中环交易广场）或绿色小巴 1 号（香港站 E 出口公共运输交汇处），20–30 分钟到山顶广场。",
				time: "20–30 分钟",
				cost: "约 HK$10–15"
			}
		],
		play: [
			"16:00 从中环出发，刚好赶上山顶日落。",
			"红钻尊享票约 HK$342，只在极端旺日值得。",
			"上山后先去卢吉道，不要进商场。"
		],
		photos: [{
			name: "车厢右侧窗",
			how: "贴玻璃，楼群在脚下出现时连拍。",
			shot: "轨道、树、中环塔楼错位。"
		}, {
			name: "总站外观",
			how: "入站前退一步拍红白车站。",
			shot: "历史车站和现代楼。"
		}],
		tips: ["下山同样可坐缆车；想省钱下山改 15 路。", "婴儿车可以，总站有无障碍。"],
		mapKind: "peak",
		mustSee: true
	},
	{
		id: "peak",
		name: "太平山",
		english: "Victoria Peak",
		area: "香港岛",
		image: "/images/peak-night.jpg",
		hours: "卢吉道 24 小时；摩天台 428 约 08:30–22:00；山顶缆车至 23:00",
		fee: "卢吉道免费；428 成人 HK$80（套票已含则不用再买）",
		duration: "2.5–4 小时",
		address: "山顶道 128 号凌霄阁 / 卢吉道、夏力道环回",
		metro: "缆车山顶总站；或巴士 15 路山顶广场总站",
		exit: "出缆车即凌霄阁。卢吉道入口在凌霄阁左侧、山顶广场旁，有「Lugard Road」路牌，靠近垃圾站/港岛径指示。",
		walk: "出站不要先上楼。向卢吉道走，Peak Circle Walk 约 3.5 公里几乎平坦，顺时针或逆时针均可。正面看维港的平台在前半段。",
		book: "428 建议和缆车一起买套票。卢吉道不用票。",
		summary: "海拔约 552 米。卢吉道把中环天际线走成一条慢镜头；428 再升高一层看夜景。",
		routeTitle: "凌霄阁 → 卢吉道日落 → 428 夜景",
		routeFrom: "山顶缆车山顶总站",
		steps: [{
			mode: "walk",
			text: "出站转卢吉道，日落前 40 分钟占正面观景位。",
			time: "50–70 分钟一圈"
		}, {
			mode: "walk",
			text: "天黑回凌霄阁电梯上 428。19:30 / 20:30 / 21:30 山顶道花园可看免费光影汇演（约 10 分钟）。",
			time: "30–45 分钟"
		}],
		play: [
			"时间轴：16:30 到 → 卢吉道日落 → 山顶广场或凌霄阁简单吃 → 19:00 上 428 → 看一场光影再下山。",
			"狮子亭在山顶公园，再走 8–10 分钟，人比 428 少。",
			"晚餐不要吃到走不动。便利店关东煮也行。"
		],
		photos: [
			{
				name: "卢吉道正面平台",
				how: "栏杆前，24–35mm，等蓝调。不要贴玻璃。",
				shot: "中环、维港、九龙一条线，世界级夜景本体。"
			},
			{
				name: "树根拱门",
				how: "环回径中段，路上有指示。",
				shot: "树根框住远处楼。"
			},
			{
				name: "428 室内",
				how: "玻璃窗用偏光或贴紧玻璃减少反光。",
				shot: "标注山峰的解说板 + 灯海。"
			}
		],
		tips: [
			"10–3 月能见度更好。夏天有霾就改室内。",
			"山顶比中环低 5–8°C，外套必带。",
			"周末黄昏极挤，平日更好。"
		],
		food: [
			"凌霄阁餐厅偏贵",
			"山顶广场美食层",
			"便利店"
		],
		mapKind: "peak",
		mustSee: true
	},
	{
		id: "starferry",
		name: "天星小轮",
		english: "Star Ferry",
		area: "维港",
		image: "/images/star-ferry.jpg",
		hours: "尖沙咀–中环约 06:30–23:30，6–12 分钟一班",
		fee: "平日上层约 HK$5、下层 HK$4；周末上层约 HK$6.5（八达通）",
		duration: "航程 8–10 分钟",
		address: "中环天星码头（中环 8 号码头旁）／尖沙咀天星码头（钟楼旁）",
		metro: "中环 A 步行至码头；尖沙咀出闸向东到钟楼",
		exit: "下山后从花园道继续向北，或坐 15C 一站。中环天星码头在海旁，有「Star Ferry」绿白招牌。",
		walk: "缆车花园道总站下山后，沿花园道向海走 12–15 分钟，或在路边等 15C。入闸拍八达通，走上层。",
		book: "航线本身不用订。想坐「维港游」观光船才要网上订，和天星小轮不是一回事。",
		summary: "1888 年起摆渡。世界上最便宜的观光航线。夜航从中环驶向尖沙咀，两岸灯火在船头合龙。",
		routeTitle: "花园道 → 中环天星码头 → 尖沙咀钟楼",
		routeFrom: "山顶缆车花园道总站",
		steps: [
			{
				mode: "walk",
				text: "下山沿花园道向北 12–15 分钟，或 15C 巴士。",
				time: "15 分钟"
			},
			{
				mode: "ferry",
				text: "拍八达通走上层。站船舷中段。",
				time: "8–10 分钟",
				cost: "约 HK$5–6.5"
			},
			{
				mode: "walk",
				text: "尖沙咀出闸即钟楼，右转星光大道。",
				time: "2 分钟"
			}
		],
		play: [
			"一定上层。下层便宜一块多但视野差。",
			"手机夜景模式，快门期间手靠栏杆。",
			"末班前看码头告示；错过改荃湾线过海。"
		],
		photos: [{
			name: "船头对岸",
			how: "上层前端，对准 IFC 或 ICC。",
			shot: "船体 + 灯海。"
		}, {
			name: "钟楼靠岸",
			how: "靠岸前连拍。",
			shot: "钟楼、半岛酒店、码头灯。"
		}],
		tips: ["8 号风球停航。", "行李箱可以，跳板有坡。"],
		mapKind: "ferry",
		mustSee: true
	},
	{
		id: "harbour",
		name: "维多利亚港夜景",
		english: "Victoria Harbour",
		area: "尖沙咀海滨",
		image: "/images/harbour-night.jpg",
		hours: "海滨全天；幻彩咏香江通常约 20:00，约 10 分钟（以旅游发展局当日为准）",
		fee: "岸上看免费",
		duration: "45–90 分钟",
		address: "尖沙咀海滨长廊、星光大道、钟楼广场",
		metro: "尖东 J 或尖沙咀 E",
		exit: "尖东站 J 出闸即海滨，几乎不用过马路。尖沙咀 E 要沿弥敦道南走再向东。",
		walk: "天星码头出闸先在钟楼停 5 分钟，再沿星光大道向东。",
		book: "岸上免费无预约。维港游船需网上订，夜间约 HK$180 起。",
		summary: "香港门面。第一天从太平山鸟瞰后再落到海平面近看；第二天 20:00 专程看幻彩咏香江。",
		routeTitle: "天星码头 → 钟楼 → 星光大道",
		routeFrom: "尖沙咀天星码头",
		steps: [{
			mode: "walk",
			text: "钟楼广场回看港岛。再向东走星光大道。",
			time: "15–25 分钟"
		}],
		play: ["第一天若 21:30 才到，灯光秀已经结束，只看静态夜景，秀留第二天。", "最佳免费机位：星光大道中段、钟楼旁、海滨艺术广场。"],
		photos: [{
			name: "钟楼 + 港岛",
			how: "钟楼侧面，让 IFC 在右后方。",
			shot: "经典明信片。"
		}, {
			name: "星光大道栏杆",
			how: "24mm 蹲低，海平线别被栏杆切。",
			shot: "人在前景、灯海在后。"
		}],
		tips: ["海风大。", "热门点三脚架可能被劝离。"],
		mapKind: "harbour",
		mustSee: true
	},
	{
		id: "avenuestars",
		name: "星光大道",
		english: "Avenue of Stars",
		area: "尖沙咀",
		image: "/images/avenue-stars.jpg",
		hours: "全天",
		fee: "免费",
		duration: "30–45 分钟",
		address: "尖沙咀梳士巴利道海滨",
		metro: "尖东 J",
		exit: "尖东 J，出闸右转钟楼、左转星光大道。",
		walk: "几乎平路。李小龙像在西段。",
		book: "无",
		summary: "电影纪念步道，更有用的是把港岛天际线走完的地面跑道。",
		routeTitle: "尖东 J → 星光大道",
		routeFrom: "尖东站",
		steps: [{
			mode: "walk",
			text: "J 出闸即海滨。",
			time: "3 分钟"
		}],
		play: ["第二天 19:45 到，占 20:00 灯光秀位置。", "手印可以摸，不必每个都拍。"],
		photos: [{
			name: "李小龙像",
			how: "早上来人少；晚上作为前景，维港做背景。",
			shot: "铜像剪影 + 灯火。"
		}],
		tips: ["雨天大理石路滑。"],
		mapKind: "harbour"
	},
	{
		id: "mongkok",
		name: "旺角",
		english: "Mong Kok",
		area: "九龙",
		image: "/images/mongkok.jpg",
		hours: "商店约 11:00–23:00，金华冰厅更早",
		fee: "免费闲逛",
		duration: "2–3 小时",
		address: "弥敦道、亚皆老街、通菜街、西洋菜南街",
		metro: "旺角站 E2 / D2 / C3",
		exit: "早餐去金华：E2。女人街：E2。朗豪坊：C3 通道或 D2 地面。波鞋街在花园街一带，E2 出闸向东。",
		walk: "出闸后不要坐车。女人街、波鞋街、朗豪坊都在 10 分钟步行圈。看出口字母，通道很长。",
		book: "逛街无预约。富临皇宫建议订位或取筹。",
		summary: "全球最密街区之一。第二天从金华冰厅开始，12:30 前吃完午饭，13:20 必须上港铁去北角。",
		routeTitle: "尖沙咀 → 旺角 E2 → 花园街 / 通菜街",
		routeFrom: "尖沙咀站",
		steps: [{
			mode: "mtr",
			text: "荃湾线往旺角 3 站。出 E2。",
			time: "8 分钟",
			cost: "约 HK$5–9"
		}, {
			mode: "walk",
			text: "E2 → 花园街金华冰厅早餐 → 女人街 → 波鞋街 → 朗豪坊添好运或富临午饭。",
			time: "随逛"
		}],
		play: [
			"09:00 金华：菠萝油 + 冻奶茶。",
			"女人街（通菜街）当热闹看，假货多。",
			"波鞋街买正品认官方店。",
			"12:00 朗豪坊 8 楼添好运，或弼街富临皇宫。"
		],
		photos: [{
			name: "弥敦道红的士",
			how: "行人天桥往下拍，等红的士过。",
			shot: "招牌、巴士、的士，旺角符号。"
		}, {
			name: "女人街棚架",
			how: "傍晚灯亮后更好，本行程是上午，拍拥挤即可。",
			shot: "货架透视。"
		}],
		tips: [
			"提防侧巷拉客。",
			"背包前背。",
			"12:30 必须结束，廉署 14:00 开门要留过海时间。"
		],
		eats: [
			{
				name: "金华冰厅",
				dish: "菠萝油、冻奶茶",
				address: "花园街 47 号",
				metro: "旺角 E2 步行 3 分钟",
				price: "HK$40–70",
				hours: "约 07:00–17:30",
				book: "不预约",
				note: "第二天早餐首选。"
			},
			{
				name: "添好运朗豪坊",
				dish: "叉烧包、虾饺",
				address: "朗豪坊 8 楼",
				metro: "旺角 C3",
				price: "HK$70–100",
				book: "取筹",
				note: "12:00 前到。"
			},
			{
				name: "富临皇宫",
				dish: "点心",
				address: "旺角弼街 1 号",
				metro: "旺角 E1",
				price: "HK$80–130",
				book: "电话或取筹",
				note: "想坐下来正经吃一顿。"
			}
		],
		mapKind: "mongkok"
	},
	{
		id: "icac",
		name: "廉政公署展览厅",
		english: "ICAC Exhibition Hall",
		area: "北角",
		image: "/images/icac.jpg",
		hours: "周一至五 14:00–17:00；周六 10:00–13:00 及 14:00–17:00；周日及公众假期休息",
		hoursRows: [
			{
				when: "周一至五",
				open: "展览厅 14:00–17:00（咖啡厅 10:00–17:00）"
			},
			{
				when: "周六",
				open: "10:00–13:00，14:00–17:00（咖啡厅同左）"
			},
			{
				when: "周日及公众假期",
				open: "展览厅与咖啡厅都休息"
			},
			{
				when: "2026/10/1–3、5–7（国庆特别开放）",
				open: "10:00–17:00；展览厅 13:00–14:00 休息；10 月 4 日仍休息"
			},
			{
				when: "八号风球 / 黑雨",
				open: "关闭。信号解除后或于两小时后开；下午 3 点后解除则当天不再开"
			}
		],
		fee: "全免",
		duration: "60–90 分钟（另加咖啡 20–40 分钟）",
		address: "北角渣华道 303 号廉政公署大楼 2 楼",
		metro: "港铁北角站 A1（渣华道）",
		exit: "北角站 A1。A 是渣华道；A2 是春秧街，方向反了会走到市场。不要出 B（英皇道）。",
		walk: "A1 出闸到渣华道，向东走（鲗鱼涌 / 油塘方向，海在左手边）。经过北角码头、渣华道市政大厦（99 号，饿了先上楼吃），继续走到 303 号。白灰色高层，门口有保安。约 8–10 分钟。",
		book: "无需预约，不能网上订场。地下大堂现场排队，职员分批放人。平日请 13:50 到；周六上午可 09:50 到赶 10:00 场。17:00 停止入场。",
		summary: "香港独特的反贪主题景点。2025 年升级：四大展区、沉浸式时光隧道、模拟录影会面室、列队认人室、葛柏数簿真迹。地下「一九七四」咖啡厅。国庆月有 303 巴士站打卡布景。",
		routeTitle: "旺角 → 金钟转港岛线 → 北角 A1 → 渣华道 303 号",
		routeFrom: "旺角站",
		steps: [{
			mode: "mtr",
			text: "荃湾线往中环到金钟（约 4 站）。金钟转港岛线往柴湾 / 康城，到北角（约 4 站）。金钟转乘通道预留 5 分钟。",
			time: "22–25 分钟",
			cost: "约 HK$10–15"
		}, {
			mode: "walk",
			text: "出 A1，渣华道向东（海在左）8–10 分钟。303 号进门安检。",
			time: "10 分钟"
		}],
		play: [
			"平日 13:50 在 G 层排队。14:00 开门。可先领透明访客小卡。",
			"建议动线：沉浸式时光隧道（五面 LED）→ 执法区「反贪者们」触控屏 → 模拟录影会面室（三角桌）→ 列队认人室 → 葛柏数簿 LED 柜 → 防贪 / 教育 / 国际合作。",
			"扫展品二维码：粤语、普通话、英语导览。",
			"AI 照相区可生成反贪海报；另有深渊镜。限量访客证与襟章送完即止。",
			"看完下到 G 层一九七四，不要省略。"
		],
		photos: [
			{
				name: "大楼外观",
				how: "渣华道对面人行道，把「303」门牌和海收入同一张。",
				shot: "执法机构立面，不要拍闸机和保安面部特写。"
			},
			{
				name: "三角桌会面室",
				how: "室内按现场规定，通常允许无闪光。",
				shot: "三面座位的调查桌，廉署最有符号感的展项。"
			},
			{
				name: "列队认人室",
				how: "可站编号位或玻璃另一侧。",
				shot: "单面玻璃体验。"
			}
		],
		tips: [
			"周日撞上闭馆：与第三天对调，先去迪士尼。",
			"不接受预约，只能现场排。暑假周六请再提前 20 分钟。",
			"16:00 后到只能走马观花。",
			"听从保安，勿在枪械展板前起哄。",
			"出发前看 icac.org.hk 展览厅页面。"
		],
		eats: [{
			name: "渣华道市政大厦熟食",
			dish: "云吞面、茶餐厅",
			address: "渣华道 99 号 2 楼",
			metro: "去 303 号的路上",
			price: "HK$40–70",
			book: "不预约",
			note: "开门前先吃，14:00 才入场。"
		}],
		mapKind: "icac",
		mustSee: true
	},
	{
		id: "cafe1974",
		name: "一九七四咖啡厅",
		english: "The 1974 Café",
		area: "北角 · 廉署大楼",
		image: "/images/icac.jpg",
		hours: "周一至六 10:00–17:00，周日及公众假期休息",
		hoursRows: [
			{
				when: "周一至六",
				open: "10:00–17:00"
			},
			{
				when: "周日及公众假期",
				open: "休息"
			},
			{
				when: "2026 国庆特别开放",
				open: "10 月 1–3、5–7 日 10:00–17:00；10 月 4 日休息"
			}
		],
		fee: "咖啡约 HK$40–60；参观咖啡厅本身不另收门票",
		duration: "20–40 分钟",
		address: "北角渣华道 303 号廉政公署大楼地下",
		metro: "与展览厅同一栋，电梯到 G 层",
		exit: "看完 2 楼展，电梯下 G，不用出大楼重新安检。",
		walk: "楼内 2 分钟。",
		book: "无需预约。座位不多，散场会挤。",
		summary: "店名取自 1974 年廉署成立。廉署咖啡、文创售卖机、打卡墙。2026 年国庆月入口布置成「303 巴士站」：港式 T 字路牌、巨型咖啡杯、路边广角镜。",
		routeTitle: "2 楼展览厅 → G 层咖啡厅",
		routeFrom: "展览厅",
		steps: [{
			mode: "walk",
			text: "电梯到 G。17:00 关，看展请在 16:00 前离开展厅。",
			time: "5 分钟"
		}],
		play: [
			"点廉署咖啡。国庆月可获限定叠色集印卡（送完即止）。",
			"打卡：303 巴士站布景、路牌、广角镜、打卡墙。路牌主题是诚信，可以正经拍一张。",
			"官方社交平台互动问答有时换咖啡渣 3D 打印饰物、路牌钥匙扣，先到先得。",
			"自助机有磁石贴、金属咖啡匙、陶瓷咖啡杯（曾迅速售罄）。"
		],
		photos: [
			{
				name: "303 巴士站布景",
				how: "入口外退一步，把路牌和咖啡杯装置拍全。",
				shot: "港式街头摄影风，这就是国庆月的主打卡。"
			},
			{
				name: "路边广角镜自拍",
				how: "按现场指示，不要挡通道。",
				shot: "变形街景 + 自己。"
			},
			{
				name: "咖啡 + 大楼",
				how: "窗边座位，杯子前景。",
				shot: "日常感收尾。"
			}
		],
		tips: ["咖啡厅 17:00 关，不要看到 16:50 才下楼。", "文创比普通冰箱贴有故事，适合伴手礼。"],
		eats: [{
			name: "一九七四",
			dish: "廉署咖啡",
			address: "大楼地下",
			metro: "北角 A1",
			price: "HK$40–60",
			book: "无需预约",
			note: "同一栋的句号。"
		}],
		mapKind: "icac"
	},
	{
		id: "hoisaan",
		name: "海山楼",
		english: "Hoi Shan Lau mural",
		area: "鲗鱼涌",
		image: "/images/mongkok.jpg",
		hours: "外墙全天",
		fee: "免费（只看外观）",
		duration: "20 分钟",
		address: "鲗鱼涌海光街 / 英皇道一带",
		metro: "鲗鱼涌 A",
		exit: "鲗鱼涌 A",
		walk: "廉署出来可沿渣华道、英皇道向东 15 分钟；或回北角站港岛线一站。",
		book: "无。不要进私人楼道。",
		summary: "老住宅外墙壁画。累了就跳过，直接回九龙吃晚饭。",
		routeTitle: "北角 303 号 → 鲗鱼涌（可选）",
		routeFrom: "廉署",
		steps: [{
			mode: "mtr",
			text: "北角一站到鲗鱼涌 A 出。",
			time: "8 分钟",
			cost: "约 HK$5"
		}],
		play: ["只拍外墙。16:30–17:30 侧光干净。"],
		photos: [{
			name: "壁画全景",
			how: "马路对面。",
			shot: "墙面色彩，不要拍居民阳台内部。"
		}],
		tips: ["住宅区，让路。"],
		mapKind: "icac"
	},
	{
		id: "templestreet",
		name: "庙街夜市",
		english: "Temple Street Night Market",
		area: "油麻地",
		image: "/images/mongkok.jpg",
		hours: "摊档约 16:00–23:00，最旺 19:00–22:00",
		fee: "免费闲逛，晚饭 HK$80–150",
		duration: "1–1.5 小时",
		address: "油麻地庙街，近众坊街、宁波街",
		metro: "油麻地 C；也可佐敦 A",
		exit: "油麻地 C 出闸向南沿庙街。不要出 A（那是弥敦道另一侧）。",
		walk: "C 出闸跟「庙街」指示。天后庙附近是大排档集中段。",
		book: "大排档不订。想先吃澳洲牛奶公司：佐敦 C2，白加士街 47 号，周四公休、只收现金。",
		summary: "档口、算命、粤曲、塑胶凳。晚饭一次解决，19:30 收队去尖沙咀。",
		routeTitle: "北角 → 金钟转荃湾线 → 油麻地 C",
		routeFrom: "北角站",
		steps: [{
			mode: "mtr",
			text: "港岛线往中环到金钟，转荃湾线到油麻地，出 C。",
			time: "25 分钟",
			cost: "约 HK$12–16"
		}],
		play: [
			"炒蟹、炒油菜、冻柠茶；或碗仔翅、鸡蛋仔当小吃。",
			"不买「名牌」表。听两首粤曲再走。",
			"19:30 结账。荃湾线一、两站到尖沙咀 / 尖东。"
		],
		photos: [{
			name: "灯笼夜市",
			how: "摊档灯亮后，从街心往后拍。",
			shot: "灯笼、蒸汽、人群。"
		}],
		tips: ["选本地人多的档。", "拒绝卡拉 OK 拉客。"],
		eats: [{
			name: "庙街大排档",
			dish: "炒蟹、碗仔翅、鸡蛋仔",
			address: "庙街近众坊街",
			metro: "油麻地 C",
			price: "HK$80–150",
			book: "不预约",
			note: "19:30 前吃完。"
		}, {
			name: "澳洲牛奶公司（备选）",
			dish: "炒蛋多士",
			address: "佐敦白加士街 47–49 号",
			metro: "佐敦 C2",
			price: "HK$50–80 现金",
			hours: "07:30–22:00，周四休",
			book: "排队拼桌",
			note: "若庙街不想坐大排档。"
		}],
		mapKind: "temple"
	},
	{
		id: "harbourcity",
		name: "海港城",
		english: "Harbour City",
		area: "尖沙咀",
		image: "/images/harbour-night.jpg",
		hours: "商场约 10:00–22:00，餐厅更晚",
		fee: "免费逛",
		duration: "30–60 分钟",
		address: "尖沙咀广东道 3–27 号",
		metro: "尖沙咀 E 或从星光大道向西走",
		exit: "看完灯光秀沿海滨向西，钟楼再往前就是海港城海运视界 / 马可孛罗门口。",
		walk: "星光大道西段接海滨长廊，不用进站。",
		book: "餐厅高峰可 OpenRice。购物不用订。",
		summary: "灯光秀后的空调、洗手间、伴手礼。奇华、美心、药妆都在这片。",
		routeTitle: "星光大道 → 海港城",
		routeFrom: "钟楼",
		steps: [{
			mode: "walk",
			text: "海滨向西 5–8 分钟进商场。",
			time: "8 分钟"
		}],
		play: ["伴手礼：蛋卷、润喉糖、饼干。月饼季节再看美心 / 奇华。", "不想逛街就吹 15 分钟空调回酒店。"],
		photos: [{
			name: "海运视界外",
			how: "对海的玻璃廊。",
			shot: "港岛夜景倒影。"
		}],
		tips: ["周末人多，认出口，别在商场里迷路误末班车。"],
		mapKind: "harbour"
	},
	{
		id: "disney",
		name: "香港迪士尼乐园",
		english: "Hong Kong Disneyland",
		area: "大屿山",
		image: "/images/theme-park.jpg",
		imageCaption: "乐园氛围示意图，实际园区以当日现场为准",
		hours: "开园常见 10:30（或 09:30 / 10:00）；闭园常见 20:00–21:00。以官方 App 为准。",
		fee: "一日票成人约 HK$639–939；儿童约 HK$499–705；3 岁以下免费；长者票约 HK$100 起。连玩二日常只加约 HK$100。",
		duration: "全日 10–12 小时",
		address: "大屿山香港迪士尼乐园度假区",
		metro: "港铁迪士尼站（迪士尼线终点）",
		exit: "迪士尼站只有一个方向：出闸沿有盖通道直走到正门安检。不要在东涌下车。",
		walk: "尖沙咀：荃湾线到荔景，转东涌线到欣澳，转迪士尼线。中环：到荔景或南昌接东涌线。车厢有米奇窗。",
		book: "门票须提前买并完成入园预约（Klook / Trip.com 通常代约；官网要自己约）。官方 App 查排队与演出。狮子王庆典在 App 预约或提早排。尊享卡周末再考虑。",
		summary: "一天可以认真玩完。魔雪奇缘世界是近年最大亮点，夜间星梦光影之旅是收尾。",
		routeTitle: "尖沙咀 → 荔景 → 欣澳 → 迪士尼站",
		routeFrom: "尖沙咀站",
		steps: [{
			mode: "mtr",
			text: "荃湾线往荃湾到荔景，转东涌线往东涌到欣澳，转迪士尼线终点。",
			time: "35–45 分钟",
			cost: "约 HK$20–25"
		}, {
			mode: "walk",
			text: "出闸通道到正门。开园前到，为安检留 20 分钟。",
			time: "8 分钟"
		}],
		play: [
			"开园先冲魔雪奇缘世界（魔雪奇幻之旅、雪岭滑雪橇），再幻想世界。",
			"刺激：灰熊山谷矿车 → 迷离大宅 → 铁甲奇侠 → 星战穿梭。",
			"演出：狮子王；巡游约 15:30；星梦光影之旅提前 30–45 分钟在小镇大街占位，投影打在城堡和两侧建筑。",
			"午餐 11:30 或 14:00，避开整点。可带未开封水。",
			"散场港铁会挤，城堡多留 15 分钟再走。"
		],
		photos: [
			{
				name: "城堡广场",
				how: "开园后或闭园后 10 分钟人少。中轴对称。",
				shot: "城堡全貌。"
			},
			{
				name: "小镇大街夜景",
				how: "光影秀前 20 分钟占中线。",
				shot: "投影同时打在两侧店铺。"
			},
			{
				name: "港铁米奇窗",
				how: "上车就拍，回程人挤。",
				shot: "车窗剪影，旅途符号。"
			}
		],
		tips: [
			"最舒服的鞋。折叠雨衣。防晒。充电宝。室内空调要外套。",
			"护照不要只放寄物柜。",
			"买票前核对是否休园。"
		],
		food: [
			"小镇大街小吃",
			"园区套餐券可省 15–25%",
			"出园后再吃正餐"
		],
		mapKind: "disney",
		mustSee: true
	},
	{
		id: "rainbow",
		name: "彩虹邨（可选）",
		english: "Choi Hung Estate",
		area: "九龙",
		image: "/images/mongkok.jpg",
		hours: "住宅区全天，篮球场视管理",
		fee: "免费外观",
		duration: "30–40 分钟",
		address: "黄大仙彩虹邨",
		metro: "彩虹站 A3 / C 视现场指示",
		exit: "彩虹站出闸跟「彩虹邨」指示，不要穿去商场就当到了。",
		walk: "出站步行约 8 分钟到色块外墙和篮球场。",
		book: "无。这是住宅，不要进走廊拍住户。",
		summary: "色块公屋和篮球场是近年网红机位。时间不够就不要塞进三日主线，可替换海山楼或旺角一小时。",
		routeTitle: "港铁彩虹站 → 邨内篮球场",
		routeFrom: "彩虹站",
		steps: [{
			mode: "walk",
			text: "出站跟指示到篮球场外墙。拍完原路回站。",
			time: "8 分钟"
		}],
		play: ["只在公共区域拍。早上或黄昏光比较干净。"],
		photos: [{
			name: "篮球场色块墙",
			how: "对面看台或球场边，等没有正在打球的孩子再拍。",
			shot: "彩虹色带 + 篮球架。"
		}],
		tips: ["居民生活区，保持安静。"],
		mapKind: "mongkok"
	},
	{
		id: "wongtaisin",
		name: "黄大仙祠（可选）",
		english: "Sik Sik Yuen Wong Tai Sin Temple",
		area: "黄大仙",
		image: "/images/taikwun.jpg",
		hours: "约 07:30–16:30，节日人极多",
		fee: "免费（求签香油另计）",
		duration: "45–60 分钟",
		address: "黄大仙竹园村路",
		metro: "黄大仙站 B2",
		exit: "黄大仙 B2，出闸有指示直达祠口，约 3 分钟。",
		walk: "B2 出闸沿人流走，牌坊即是。",
		book: "无需预约。",
		summary: "「有求必应」的道教庙宇。可替换第二天上午的旺角一小时，或第四天再来。",
		routeTitle: "黄大仙 B2 → 祠入口",
		routeFrom: "黄大仙站",
		steps: [{
			mode: "walk",
			text: "B2 出闸 3 分钟到牌坊。",
			time: "3 分钟"
		}],
		play: ["主殿、九龙壁、园圃。求签看自己，不要被强行解签收费吓到。"],
		photos: [{
			name: "牌坊",
			how: "退到广场中轴。",
			shot: "琉璃瓦、香炉烟。"
		}],
		tips: ["初一十五和春节极挤。"],
		mapKind: "mongkok"
	}
];
var spotById = Object.fromEntries(spots.map((s) => [s.id, s]));
var days = [
	{
		id: 1,
		name: "第一天",
		kicker: "港岛纵深",
		subtitle: "中环巷弄 · 湾仔蛋挞 · 太平山日落 · 维港夜航",
		image: "/images/peak-night.jpg",
		distance: "港岛步行 + 叮叮 + 缆车，晚上才过海",
		zone: "主场在港岛，夜宿九龙也只在尖沙咀海滨收尾",
		items: [
			{
				time: "08:30",
				spotId: "lanfong",
				title: "兰芳园 + 泰昌蛋挞",
				note: "中环 D2 出闸。丝袜奶茶、菠萝油、热蛋挞。",
				eat: "兰芳园阁麟街 / 泰昌摆花街"
			},
			{
				time: "09:20",
				spotId: "manmo",
				title: "文武庙",
				note: "荷李活道 124 号，盘香仰拍 30 分钟。"
			},
			{
				time: "09:55",
				spotId: "pottinger",
				title: "石板街",
				note: "花岗岩石阶，拍完接半山扶梯。"
			},
			{
				time: "10:15",
				spotId: "escalator",
				title: "半山扶梯",
				note: "10:00 后上行，士丹顿街必须下车。"
			},
			{
				time: "11:00",
				spotId: "taikwun",
				title: "大馆",
				note: "监狱展览 + 砖拱。免预约，热门展或要扫码取票。"
			},
			{
				time: "12:30",
				spotId: "markets",
				title: "中环街市午餐",
				note: "下山 5 分钟。洗手间、空调、小食。",
				eat: "街市档口"
			},
			{
				time: "14:00",
				spotId: "tram",
				title: "叮叮车往湾仔",
				note: "德辅道中东行，上层前排。上车往后拍卡。"
			},
			{
				time: "14:30",
				spotId: "goldeneauhinia",
				title: "金紫荆广场",
				note: "看海 20 分钟，对岸是明天的星光大道。"
			},
			{
				time: "15:10",
				spotId: "bakehouse",
				title: "Bakehouse 酸种蛋挞",
				note: "售完即止。吃完港铁回中环 J2。",
				eat: "酸种蛋挞"
			},
			{
				time: "16:00",
				spotId: "peaktram",
				title: "山顶缆车",
				note: "中环 J2，电子票走已购票通道。车上坐右侧。"
			},
			{
				time: "16:30",
				spotId: "peak",
				title: "卢吉道 + 摩天台 428",
				note: "先步道看日落，再上楼看夜景。"
			},
			{
				time: "21:10",
				spotId: "starferry",
				title: "天星小轮夜航",
				note: "中环码头上层，10 分钟跨海。"
			},
			{
				time: "21:30",
				spotId: "harbour",
				title: "尖沙咀维港",
				note: "灯光秀已结束，只看静态夜景。秀留明天。"
			}
		]
	},
	{
		id: 2,
		name: "第二天",
		kicker: "九龙与北角",
		subtitle: "旺角市井 · 廉署展览厅 · 庙街 · 幻彩咏香江",
		image: "/images/icac.jpg",
		distance: "上午九龙，中午过海，傍晚再回来",
		zone: "关键约束：廉署平日 14:00 才开门，周日闭馆",
		items: [
			{
				time: "09:00",
				spotId: "mongkok",
				title: "金华冰厅 + 旺角街区",
				note: "旺角 E2。女人街、波鞋街、朗豪坊。",
				eat: "金华菠萝油；午饭添好运或富临"
			},
			{
				time: "13:20",
				spotId: "icac",
				title: "过海去北角",
				note: "金钟转港岛线，北角 A1，渣华道向东 10 分钟。"
			},
			{
				time: "14:00",
				spotId: "icac",
				title: "廉政公署展览厅",
				note: "免费免预约。G 层排队。2 楼四大展区。",
				eat: "若早到：渣华道 99 号熟食中心"
			},
			{
				time: "16:00",
				spotId: "cafe1974",
				title: "一九七四咖啡厅",
				note: "同一栋 G 层。廉署咖啡 + 303 巴士站打卡。17:00 关。"
			},
			{
				time: "16:45",
				spotId: "hoisaan",
				title: "海山楼（可选）",
				note: "累了跳过，直接回油麻地。"
			},
			{
				time: "18:30",
				spotId: "templestreet",
				title: "庙街晚饭",
				note: "油麻地 C。19:30 必须结账。",
				eat: "炒蟹 / 碗仔翅；备选澳牛（周四休）"
			},
			{
				time: "19:45",
				spotId: "avenuestars",
				title: "星光大道占位",
				note: "尖东 J，海风和手印。"
			},
			{
				time: "20:00",
				spotId: "harbour",
				title: "幻彩咏香江",
				note: "约 10 分钟。结束后进海港城。"
			},
			{
				time: "20:20",
				spotId: "harbourcity",
				title: "海港城吹空调",
				note: "伴手礼、洗手间、回酒店。"
			}
		]
	},
	{
		id: 3,
		name: "第三天",
		kicker: "大屿山全日",
		subtitle: "香港迪士尼 · 开园到光影秀",
		image: "/images/theme-park.jpg",
		distance: "荔景转东涌线，欣澳转迪士尼线",
		zone: "整天都在大屿山，不要再塞市区",
		items: [
			{
				time: "08:15",
				spotId: "disney",
				title: "酒店出发",
				note: "尖沙咀约 08:15 上港铁，为安检留余量。"
			},
			{
				time: "09:30",
				spotId: "disney",
				title: "入园安检",
				note: "门票预约截图 + 证件。提早入园走专用通道。"
			},
			{
				time: "10:30",
				spotId: "disney",
				title: "魔雪奇缘世界",
				note: "开园先冲室内热门。"
			},
			{
				time: "12:30",
				spotId: "disney",
				title: "午餐后刺激项目",
				note: "矿车、迷离大宅、铁甲奇侠。",
				eat: "11:30 或 14:00 吃，避开整点"
			},
			{
				time: "15:30",
				spotId: "disney",
				title: "巡游 / 狮子王",
				note: "演出时间看官方 App。"
			},
			{
				time: "19:15",
				spotId: "disney",
				title: "星梦光影之旅",
				note: "小镇大街提前占中线。"
			},
			{
				time: "20:45",
				spotId: "disney",
				title: "港铁返市区",
				note: "人潮过后再上。约 21:30 回尖沙咀。"
			}
		]
	}
];
var MODE_LABEL = {
	walk: "步行",
	mtr: "港铁",
	tram: "电车",
	bus: "巴士",
	ferry: "渡轮",
	taxi: "的士",
	funicular: "缆车",
	minibus: "小巴"
};
var dayFlows = {
	1: {
		blurb: "全天几乎都在港岛。晚上才坐天星小轮过海，到尖沙咀看维港。",
		stops: [
			{
				n: 1,
				name: "中环老街早餐",
				how: "港铁中环 D2",
				zone: "港岛"
			},
			{
				n: 2,
				name: "文武庙 · 石板街 · 大馆",
				how: "全程步行",
				zone: "港岛"
			},
			{
				n: 3,
				name: "叮叮车去湾仔 / Bakehouse",
				how: "德辅道中上车",
				zone: "港岛"
			},
			{
				n: 4,
				name: "山顶缆车 → 太平山夜景",
				how: "中环 J2 出闸",
				zone: "港岛"
			},
			{
				n: 5,
				name: "天星小轮 → 尖沙咀维港",
				how: "中环码头上层",
				zone: "九龙"
			}
		]
	},
	2: {
		blurb: "上午旺角，中午过海去北角赶廉署 14:00 开门。傍晚回九龙庙街，晚上尖沙咀看灯光秀。",
		stops: [
			{
				n: 1,
				name: "旺角金华冰厅 + 街区",
				how: "旺角站 E2 / D2",
				zone: "九龙"
			},
			{
				n: 2,
				name: "港铁过海 → 北角廉署",
				how: "金钟转港岛线",
				zone: "港岛"
			},
			{
				n: 3,
				name: "展览厅 + 一九七四咖啡",
				how: "北角 A1 沿渣华道",
				zone: "港岛"
			},
			{
				n: 4,
				name: "庙街夜市晚饭",
				how: "油麻地 C",
				zone: "九龙"
			},
			{
				n: 5,
				name: "星光大道 · 幻彩咏香江",
				how: "尖东 J",
				zone: "九龙"
			}
		]
	},
	3: {
		blurb: "整日留在大屿山乐园。不要再塞市区景点。",
		stops: [
			{
				n: 1,
				name: "酒店出发上港铁",
				how: "尖沙咀 / 中环",
				zone: "九龙"
			},
			{
				n: 2,
				name: "荔景转东涌线",
				how: "往东涌方向",
				zone: "大屿山"
			},
			{
				n: 3,
				name: "欣澳转迪士尼线",
				how: "专用短线",
				zone: "大屿山"
			},
			{
				n: 4,
				name: "迪士尼站出闸入园",
				how: "通道直达正门",
				zone: "大屿山"
			},
			{
				n: 5,
				name: "玩到光影秀再返市区",
				how: "原路港铁",
				zone: "九龙"
			}
		]
	}
};
var mealPlan = [
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
				alt: "兰芳园周日休息。改泰昌买蛋挞，早餐换附近茶餐厅或翠华。"
			},
			{
				time: "12:30",
				slot: "午餐",
				name: "中环街市（首选）",
				order: "鱼蛋、碗仔翅或简餐。图的是快、有洗手间和空调。",
				where: "大馆下山 5 分钟，德辅道中 80 号",
				alt: "想吃一顿正经的：一乐烧鹅（士丹利街，点鹅腿）或九记牛腩（威灵顿街 89 号）。两家都不预约，11:30 前或 13:30 后人少。"
			},
			{
				time: "15:10",
				slot: "下午茶",
				name: "Bakehouse 湾仔旗舰",
				order: "酸种蛋挞立刻吃；可颂打包上山当缆车前垫饥。",
				where: "湾仔大王东街 14 号。湾仔 B2 出闸步行约 4 分钟",
				alt: "蛋挞售完可预订下一炉。也可改尖沙咀汉口道 44 号外带店（第二天晚上也方便）。"
			},
			{
				time: "山顶",
				slot: "垫饥",
				name: "山顶广场美食层 / 便利店",
				order: "关东煮、三明治即可。不要在凌霄阁吃贵套餐。",
				where: "出缆车先去卢吉道，吃放在天黑前",
				alt: "Bakehouse 可颂就是为此留的。"
			}
		]
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
				alt: "想吃滑蛋：改去佐敦澳洲牛奶公司（C2，只收现金，周四公休），再港铁回旺角逛街。"
			},
			{
				time: "12:00",
				slot: "午餐",
				name: "添好运朗豪坊 或 富临皇宫",
				order: "添好运：叉烧包、虾饺、萝卜糕，现场取筹。富临：正经早茶，三人以上建议电话订。",
				where: "旺角 C3 通道 / E1，12:30 前吃完",
				alt: "排队太长就买个菠萝油当午饭，把时间留给廉署。"
			},
			{
				time: "13:40",
				slot: "过海前",
				name: "渣华道市政大厦熟食",
				order: "云吞面、茶餐厅。展览厅平日 14:00 才开，早到先在 99 号 2 楼吃。",
				where: "北角 A1 沿渣华道往 303 号的路上",
				alt: "旺角已经吃饱可跳过。"
			},
			{
				time: "16:00",
				slot: "咖啡",
				name: "一九七四咖啡厅",
				order: "点「廉署咖啡」。国庆月打卡 303 巴士站布景、路牌、广角镜。",
				where: "渣华道 303 号大楼地下，看完 2 楼展坐电梯下来",
				alt: "17:00 关店。16:00 必须离开展厅。周日及公众假期休息。"
			},
			{
				time: "18:30",
				slot: "晚餐",
				name: "庙街大排档",
				order: "炒蟹、炒油菜、冻柠茶；或碗仔翅、鸡蛋仔当小吃。",
				where: "油麻地 C，庙街近众坊街",
				alt: "不想坐塑料凳：佐敦澳牛或麦文记鲜虾云吞面。19:30 必须结账去尖沙咀抢灯光秀。"
			}
		]
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
				alt: "—"
			},
			{
				time: "11:30 或 14:00",
				slot: "午餐",
				name: "园区餐厅",
				order: "避开 12:00–13:00 整点。套餐券常省 15–25%。可带未开封瓶装水。",
				where: "幻想世界或美国小镇大街",
				alt: "—"
			},
			{
				time: "散场",
				slot: "晚餐",
				name: "园内或回尖沙咀",
				order: "光影秀后再吃。尖沙咀华星冰室、正斗粥面晚上还开。",
				where: "视闭园时间",
				alt: "—"
			}
		]
	}
];
var restaurants = [
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
		order: "丝袜奶茶 + 菠萝油。想吃正餐再加猪扒包。"
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
		order: "原味蛋挞，出炉时买。"
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
		order: "烧鹅腿 + 白饭或捞面。"
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
		order: "牛腩面加牛筋。"
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
		order: "鱼蛋或简餐，12:30 前吃完。"
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
		order: "酸种蛋挞立刻吃；可颂打包上山。"
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
		order: "菠萝油 + 冻奶茶。"
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
		order: "虾饺、烧卖、叉烧包各一笼即止。"
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
		order: "叉烧包必点，再加虾饺、萝卜糕。"
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
		order: "炒蛋多士 + 蛋白炖鲜奶。可把煎蛋改成炒蛋。"
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
		order: "鲜虾云吞面。"
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
		order: "云吞面或茶餐厅套餐。"
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
		order: "廉署咖啡。国庆月问有无限定集印卡。"
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
		order: "炒蟹或炒油菜 + 冻柠茶。小吃可加碗仔翅、鸡蛋仔。"
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
		order: "杨枝甘露。"
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
		order: "奶茶 + 常餐。"
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
		order: "原味蛋卷。"
	}
];
var packing = {
	documents: [
		"护照，或内地居民往来港澳通行证 + 有效赴港签注",
		"回程机票 / 高铁票截图与电子登机牌",
		"酒店订单、迪士尼门票（含入园预约）、山顶缆车电子票下载到相册",
		"信用卡 Visa / Mastercard，再带一张银联兜底",
		"港币现金 HK$300–800：的士、澳牛、街市、大排档",
		"身份证备份照片与纸质复印件分开放"
	],
	electronics: [
		"手机 + 充电宝 ≥10000mAh",
		"英标三脚转换插头 Type G，香港 220V",
		"充电线、耳机",
		"eSIM 提前安装"
	],
	clothes: [
		"最舒服的步行鞋 + 一双可换。迪士尼日禁止新鞋",
		"薄外套：港铁、茶餐厅、山顶都冷",
		"10–3 月一件毛衣；5–9 月速干短袖 + 折叠雨衣",
		"防晒帽、墨镜、防晒霜"
	],
	health: [
		"感冒、肠胃、创可贴、自己的处方药",
		"口罩：文武庙盘香、旺角人潮",
		"夏夜驱蚊"
	],
	others: [
		"轻量双肩包",
		"环保袋",
		"湿纸巾",
		"不要带刀具过安检"
	]
};
var apps = [
	{
		name: "旅客八达通 / Octopus",
		maker: "八达通卡有限公司",
		why: "港铁、巴士、电车、天星、7-11 一拍即走。出发前下载，落地有网立刻开通。",
		must: true,
		category: "支付交通"
	},
	{
		name: "MTR Mobile",
		maker: "港铁",
		why: "路线、车费、首末班、出口。金钟转乘没有它容易走错层。",
		must: true,
		category: "导航"
	},
	{
		name: "香港出行易 HKeMobility",
		maker: "运输署",
		why: "巴士、小巴、渡轮实时到站。",
		must: true,
		category: "导航"
	},
	{
		name: "Google 地图",
		maker: "Google",
		why: "香港没有墙。出发前下载离线「香港」。阁麟街、渣华道、卢吉道都靠它。",
		must: true,
		category: "导航"
	},
	{
		name: "香港迪士尼乐园",
		maker: "乐园官方",
		why: "排队、演出、地图、部分预约。",
		must: true,
		category: "门票"
	},
	{
		name: "OpenRice 开饭喇",
		maker: "OpenRice",
		why: "本地餐厅点评。富临、添好运取筹也常看这里。",
		must: true,
		category: "美食"
	},
	{
		name: "Klook / Trip.com",
		maker: "客路 / 携程国际",
		why: "迪士尼、山顶缆车、机场快线、eSIM。",
		must: true,
		category: "门票"
	},
	{
		name: "MyObservatory 天文台",
		maker: "香港天文台",
		why: "八号风球会停渡轮、影响缆车和廉署。",
		must: true,
		category: "出行"
	},
	{
		name: "Uber / HKTaxi",
		maker: "各家",
		why: "山顶不想排队、行李多、深夜机场。",
		must: false,
		category: "打车"
	},
	{
		name: "AlipayHK 或 WeChat Pay HK",
		maker: "支付宝 / 腾讯",
		why: "香港钱包，不是内地版直接刷。八达通仍是第一优先。",
		must: false,
		category: "支付交通"
	}
];
var transportNotes = {
	airport: [
		"机场快线：机场 → 九龙站约 21 分钟、香港站约 24 分钟，单程约 HK$115。",
		"城巴 A21 往尖沙咀、旺角，有行李架，约 HK$40–45。",
		"的士机场往尖沙咀约 HK$280–350。"
	],
	mtr: [
		"过海用荃湾线。去北角：金钟转港岛线往柴湾。",
		"出口：中环 J2 缆车、D2 阁麟街；北角 A1 渣华道；油麻地 C 庙街；尖东 J 星光大道；旺角 E2 金华。",
		"迪士尼线只在欣澳接。不要在东涌下车。"
	],
	bus: ["15 路中环交易广场 → 山顶。绿色小巴 1 号香港站 E 出口上山顶。", "小巴要提前喊「有落」。"],
	taxi: ["红的市区、绿的新界、蓝的大屿山。一定打表。过海隧道费通常乘客出。"],
	ferryTram: ["天星走上层。叮叮上车往后拍卡。东行去湾仔，西行去上环。"],
	network: ["香港没有墙。出发前装 eSIM。内地号码关掉数据漫游。"]
};
var notices = [
	"票价、班次、开园与灯光秀会调整，以官方当日公布为准。",
	"廉署展览厅周日及公众假期关闭，平日 14:00 才开门；无需预约，现场排队。2026 年 10 月 1–3、5–7 日特别开放，10 月 4 日仍休息。",
	"澳洲牛奶公司只收现金且周四公休。餐厅排队情况以到店为准。"
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var MAPS = {
	peak: {
		title: "中环 J2 → 太平山",
		nodes: [
			{
				id: "mtr",
				name: "中环站 J2",
				sub: "不要出 D 口"
			},
			{
				id: "garden",
				name: "花园道 33 号",
				sub: "步行 8–10 分"
			},
			{
				id: "tram",
				name: "山顶缆车",
				sub: "上车坐右侧"
			},
			{
				id: "peak",
				name: "凌霄阁出站",
				sub: "先别进商场"
			},
			{
				id: "lugard",
				name: "卢吉道观景",
				sub: "日落前 40 分到位"
			},
			{
				id: "sky",
				name: "摩天台 428",
				sub: "天黑后再上"
			}
		],
		edges: [
			{
				from: "mtr",
				to: "garden",
				label: "沿花园道上坡",
				mode: "walk"
			},
			{
				from: "garden",
				to: "tram",
				label: "电子票走已购票通道",
				mode: "walk"
			},
			{
				from: "tram",
				to: "peak",
				label: "约 8 分钟",
				mode: "funicular"
			},
			{
				from: "peak",
				to: "lugard",
				label: "左拐 Lugard Road",
				mode: "walk"
			},
			{
				from: "lugard",
				to: "sky",
				label: "回凌霄阁坐电梯",
				mode: "walk"
			}
		]
	},
	icac: {
		title: "旺角 → 北角廉署",
		nodes: [
			{
				id: "mk",
				name: "旺角站",
				sub: "荃湾线往中环"
			},
			{
				id: "adm",
				name: "金钟站转乘",
				sub: "通道预留 5 分"
			},
			{
				id: "np",
				name: "北角站 A1",
				sub: "渣华道，不要出 B"
			},
			{
				id: "java",
				name: "渣华道向东",
				sub: "海在左手边"
			},
			{
				id: "bldg",
				name: "渣华道 303 号",
				sub: "8–10 分钟走到"
			},
			{
				id: "hall",
				name: "G 层排队上 2 楼",
				sub: "平日 14:00 开门"
			}
		],
		edges: [
			{
				from: "mk",
				to: "adm",
				label: "约 4 站",
				mode: "mtr"
			},
			{
				from: "adm",
				to: "np",
				label: "港岛线往柴湾 4 站",
				mode: "mtr"
			},
			{
				from: "np",
				to: "java",
				label: "出 A1",
				mode: "walk"
			},
			{
				from: "java",
				to: "bldg",
				label: "经市政大厦 99 号",
				mode: "walk"
			},
			{
				from: "bldg",
				to: "hall",
				label: "安检，免预约",
				mode: "walk"
			}
		]
	},
	disney: {
		title: "市区 → 迪士尼站",
		nodes: [
			{
				id: "tst",
				name: "尖沙咀 / 中环",
				sub: "荃湾线"
			},
			{
				id: "lk",
				name: "荔景转东涌线",
				sub: "往东涌"
			},
			{
				id: "sb",
				name: "欣澳转迪士尼线",
				sub: "不要在东涌下"
			},
			{
				id: "dl",
				name: "迪士尼站",
				sub: "终点"
			},
			{
				id: "gate",
				name: "正门安检",
				sub: "有盖通道直达"
			}
		],
		edges: [
			{
				from: "tst",
				to: "lk",
				label: "往荃湾方向",
				mode: "mtr"
			},
			{
				from: "lk",
				to: "sb",
				label: "东涌线",
				mode: "mtr"
			},
			{
				from: "sb",
				to: "dl",
				label: "专用短线",
				mode: "mtr"
			},
			{
				from: "dl",
				to: "gate",
				label: "出闸即走",
				mode: "walk"
			}
		]
	},
	harbour: {
		title: "湾仔海滨 / 维港",
		nodes: [
			{
				id: "central",
				name: "德辅道中东行站",
				sub: "叮叮"
			},
			{
				id: "wanchai",
				name: "湾仔 / 修顿下车",
				sub: "不要坐过"
			},
			{
				id: "square",
				name: "金紫荆广场",
				sub: "向北过会展"
			},
			{
				id: "back",
				name: "港铁回中环",
				sub: "去 J2 赶缆车"
			}
		],
		edges: [
			{
				from: "central",
				to: "wanchai",
				label: "15–20 分",
				mode: "tram"
			},
			{
				from: "wanchai",
				to: "square",
				label: "步行 10 分",
				mode: "walk"
			},
			{
				from: "square",
				to: "back",
				label: "不要再坐叮叮",
				mode: "mtr"
			}
		]
	},
	wanchai: {
		title: "湾仔海滨 → Bakehouse",
		nodes: [
			{
				id: "tram",
				name: "湾仔叮叮下车",
				sub: "修顿 / 轩尼诗道"
			},
			{
				id: "square",
				name: "金紫荆广场",
				sub: "会展海滨"
			},
			{
				id: "bake",
				name: "Bakehouse 大王东街 14 号",
				sub: "湾仔 B2 约 4 分"
			},
			{
				id: "mtr",
				name: "湾仔 / 会展站",
				sub: "港岛线回中环"
			}
		],
		edges: [
			{
				from: "tram",
				to: "square",
				label: "向北 8–12 分",
				mode: "walk"
			},
			{
				from: "square",
				to: "bake",
				label: "地图导航 10 分",
				mode: "walk"
			},
			{
				from: "bake",
				to: "mtr",
				label: "一站回中环 J2",
				mode: "mtr"
			}
		]
	},
	central: {
		title: "中环步行串线",
		nodes: [
			{
				id: "breakfast",
				name: "中环 D2",
				sub: "阁麟街兰芳园"
			},
			{
				id: "manmo",
				name: "文武庙",
				sub: "荷李活道 124 号"
			},
			{
				id: "stone",
				name: "石板街",
				sub: "砵典乍街"
			},
			{
				id: "esc",
				name: "半山扶梯",
				sub: "10:00 后上行"
			},
			{
				id: "tk",
				name: "大馆",
				sub: "荷李活道 10 号"
			}
		],
		edges: [
			{
				from: "breakfast",
				to: "manmo",
				label: "荷李活道向西 6–8 分",
				mode: "walk"
			},
			{
				from: "manmo",
				to: "stone",
				label: "回头向东 4 分",
				mode: "walk"
			},
			{
				from: "stone",
				to: "esc",
				label: "接回荷李活道",
				mode: "walk"
			},
			{
				from: "esc",
				to: "tk",
				label: "士丹顿街下，奥卑利街",
				mode: "walk"
			}
		]
	},
	mongkok: {
		title: "旺角街区",
		nodes: [
			{
				id: "stn",
				name: "旺角站 E2",
				sub: "出闸"
			},
			{
				id: "kam",
				name: "金华冰厅",
				sub: "花园街 47 号"
			},
			{
				id: "ladies",
				name: "女人街",
				sub: "通菜街"
			},
			{
				id: "langham",
				name: "朗豪坊",
				sub: "C3 通道"
			},
			{
				id: "lunch",
				name: "添好运 / 富临",
				sub: "12:30 前吃完"
			}
		],
		edges: [
			{
				from: "stn",
				to: "kam",
				label: "向南 3 分",
				mode: "walk"
			},
			{
				from: "kam",
				to: "ladies",
				label: "平行一条街",
				mode: "walk"
			},
			{
				from: "ladies",
				to: "langham",
				label: "亚皆老街",
				mode: "walk"
			},
			{
				from: "langham",
				to: "lunch",
				label: "然后上港铁过海",
				mode: "walk"
			}
		]
	},
	ferry: {
		title: "中环码头 → 尖沙咀",
		nodes: [
			{
				id: "lower",
				name: "花园道缆车总站",
				sub: "下山"
			},
			{
				id: "pier",
				name: "中环天星码头",
				sub: "步行或 15C"
			},
			{
				id: "deck",
				name: "上层甲板",
				sub: "拍八达通"
			},
			{
				id: "tst",
				name: "尖沙咀码头",
				sub: "钟楼"
			},
			{
				id: "ave",
				name: "星光大道",
				sub: "海滨向东"
			}
		],
		edges: [
			{
				from: "lower",
				to: "pier",
				label: "12–15 分",
				mode: "walk"
			},
			{
				from: "pier",
				to: "deck",
				label: "入闸走上层",
				mode: "walk"
			},
			{
				from: "deck",
				to: "tst",
				label: "8–10 分",
				mode: "ferry"
			},
			{
				from: "tst",
				to: "ave",
				label: "2 分",
				mode: "walk"
			}
		]
	},
	temple: {
		title: "北角 → 庙街 → 尖东",
		nodes: [
			{
				id: "np",
				name: "北角站",
				sub: "港岛线往中环"
			},
			{
				id: "adm",
				name: "金钟",
				sub: "转荃湾线"
			},
			{
				id: "ytm",
				name: "油麻地 C",
				sub: "庙街"
			},
			{
				id: "tst",
				name: "尖东 J",
				sub: "星光大道"
			}
		],
		edges: [
			{
				from: "np",
				to: "adm",
				label: "过海",
				mode: "mtr"
			},
			{
				from: "adm",
				to: "ytm",
				label: "往荃湾",
				mode: "mtr"
			},
			{
				from: "ytm",
				to: "tst",
				label: "晚饭后 1–2 站",
				mode: "mtr"
			}
		]
	},
	jordan: {
		title: "佐敦澳牛",
		nodes: [{
			id: "stn",
			name: "佐敦站 C2",
			sub: "出闸"
		}, {
			id: "adc",
			name: "白加士街 47 号",
			sub: "步行 2 分"
		}],
		edges: [{
			from: "stn",
			to: "adc",
			label: "宝灵街右转",
			mode: "walk"
		}]
	}
};
function RouteMap({ kind }) {
	if (kind === "overview") return null;
	const data = MAPS[kind];
	if (!data) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
		className: "rounded-lg bg-ink px-4 py-4 text-cream",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-3 text-xs tracking-widest text-harbour-mist",
			children: data.title
		}), data.nodes.map((node, i) => {
			const edge = data.edges.find((e) => e.from === node.id);
			const last = i === data.nodes.length - 1;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex w-7 shrink-0 flex-col items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-7 items-center justify-center rounded-full border-2 border-cream font-mono text-xs",
						children: i + 1
					}), !last ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "my-1 min-h-6 w-px flex-1 bg-harbour" }) : null]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: last ? "pb-0" : "pb-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: node.name
						}),
						node.sub ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-faint",
							children: node.sub
						}) : null,
						edge ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs text-harbour-mist",
							children: [
								MODE_LABEL[edge.mode],
								" · ",
								edge.label
							]
						}) : null
					]
				})]
			}, node.id);
		})]
	});
}
var ZONE_TONE = {
	港岛: "bg-harbour-mist text-harbour-deep",
	九龙: "bg-paper-3 text-fg",
	大屿山: "bg-cream text-ink"
};
function DayFlow({ dayId }) {
	const flow = dayFlows[dayId];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-ink px-5 py-5 text-cream",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest text-harbour-mist",
				children: "今日怎么走 · 按编号顺序，不是地图"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-harbour-mist",
				children: flow.blurb
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-4",
				children: flow.stops.map((stop, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex w-8 shrink-0 flex-col items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-8 items-center justify-center rounded-full bg-cream font-mono text-sm text-ink",
							children: stop.n
						}), i < flow.stops.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "my-1 min-h-5 w-px flex-1 bg-harbour" }) : null]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: i < flow.stops.length - 1 ? "pb-4" : "",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: stop.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-faint",
								children: stop.how
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("mt-2 inline-flex rounded-full px-2 py-0.5 text-xs", ZONE_TONE[stop.zone]),
								children: stop.zone
							})
						]
					})]
				}, stop.n))
			})
		]
	});
}
var DAY_KEYS = [
	{
		id: 1,
		title: "第一天 · 港岛",
		lock: "16:00 必须回到中环 J2 赶缆车"
	},
	{
		id: 2,
		title: "第二天 · 九龙 + 北角",
		lock: "廉署平日 14:00 开门，周日闭馆，不预约"
	},
	{
		id: 3,
		title: "第三天 · 大屿山",
		lock: "荔景转东涌线，欣澳转迪士尼线，不要在东涌下"
	}
];
function TripOverview({ active, onPick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-xl border border-line bg-ink text-cream",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-b border-harbour-deep px-5 py-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest text-harbour-mist",
				children: "三日总览 · 按天读，不要当地图找方向"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 max-w-2xl text-sm leading-relaxed text-harbour-mist",
				children: [
					"以前那种「把香港缩成一块」的图会让人懵：标签叠在一起，分不清先去哪。下面三列是",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
						className: "font-medium text-cream",
						children: "当天的顺序"
					}),
					"。点一列，看这一天怎么走。"
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid md:grid-cols-3",
			children: DAY_KEYS.map((day, idx) => {
				const flow = dayFlows[day.id];
				const on = active === day.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onPick(day.id),
					className: cn("px-5 py-5 text-left transition-colors", idx < 2 && "border-b border-harbour-deep md:border-b-0 md:border-r", on ? "bg-ink-mid" : "hover:bg-ink-soft"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-widest text-harbour-mist",
							children: day.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs leading-relaxed text-faint",
							children: day.lock
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-4 space-y-2",
							children: flow.stops.map((stop) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex size-6 shrink-0 items-center justify-center rounded-full bg-cream font-mono text-xs text-ink",
									children: stop.n
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-medium",
									children: stop.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs text-faint",
									children: stop.how
								})] })]
							}, stop.n))
						})
					]
				}, day.id);
			})
		})]
	});
}
function ModeChip({ mode }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex h-6 items-center rounded-full px-2 text-xs font-medium", mode === "walk" && "bg-paper-2 text-muted", (mode === "mtr" || mode === "ferry") && "bg-harbour-mist text-harbour-deep", mode === "funicular" && "bg-paper-3 text-fg", (mode === "tram" || mode === "bus" || mode === "minibus") && "bg-paper-2 text-fg", mode === "taxi" && "bg-paper-3 text-vermillion"),
		children: MODE_LABEL[mode]
	});
}
var TABS = [
	{
		id: "days",
		label: "三日行程"
	},
	{
		id: "food",
		label: "吃什么"
	},
	{
		id: "spots",
		label: "景点"
	},
	{
		id: "prep",
		label: "行前"
	},
	{
		id: "move",
		label: "交通"
	}
];
var MUST = [
	"disney",
	"icac",
	"peak",
	"harbour"
];
function Home() {
	const [tab, setTab] = (0, import_react.useState)("days");
	const [dayId, setDayId] = (0, import_react.useState)(1);
	const [openId, setOpenId] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const apply = () => {
			const h = window.location.hash.replace("#", "");
			if (h.startsWith("spot-")) {
				setOpenId(h.slice(5));
				return;
			}
			if (h.startsWith("day-")) {
				const n = Number(h.slice(4));
				if (n === 1 || n === 2 || n === 3) {
					setDayId(n);
					setTab("days");
				}
				return;
			}
			if (TABS.some((t) => t.id === h)) setTab(h);
		};
		apply();
		window.addEventListener("hashchange", apply);
		return () => window.removeEventListener("hashchange", apply);
	}, []);
	const openSpot = (id) => {
		setOpenId(id);
		window.history.replaceState(null, "", `#spot-${id}`);
	};
	const closeSpot = () => {
		setOpenId(null);
		const next = tab === "days" ? `#day-${dayId}` : `#${tab}`;
		window.history.replaceState(null, "", next);
	};
	const goTab = (id) => {
		setTab(id);
		window.history.replaceState(null, "", `#${id}`);
	};
	const pickDay = (id) => {
		setDayId(id);
		setTab("days");
		window.history.replaceState(null, "", `#day-${id}`);
	};
	const day = days.find((d) => d.id === dayId) ?? days[0];
	const openSpotData = openId ? spotById[openId] : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-paper text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-40 border-b border-line bg-paper",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg leading-none",
						children: "香江三日"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted",
						children: "香港自由行 · 路线、出口、吃什么"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hidden text-xs text-faint sm:block",
						children: "迪士尼 · 廉署 · 太平山 · 维港"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "mx-auto flex max-w-5xl gap-1 overflow-x-auto px-4 pb-2",
					children: TABS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => goTab(t.id),
						className: cn("h-10 shrink-0 rounded-full px-4 text-sm font-medium transition-colors", tab === t.id ? "bg-ink text-cream" : "text-muted hover:bg-paper-2"),
						children: t.label
					}, t.id))
				})]
			}),
			tab === "days" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Itinerary, {
				day,
				dayId,
				onPickDay: pickDay,
				onOpen: openSpot
			}) : null,
			tab === "food" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FoodSection, {
				onOpen: openSpot,
				onPickDay: pickDay
			}) : null,
			tab === "spots" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpotsSection, { onOpen: openSpot }) : null,
			tab === "prep" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrepSection, {}) : null,
			tab === "move" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoveSection, {}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-line px-4 py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-5xl text-sm text-muted",
					children: [notices.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "leading-relaxed",
						children: n
					}, n)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xs text-faint",
						children: "票价、班次、开园以官方当日公布为准。"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpotDialog, {
				spot: openSpotData,
				onClose: closeSpot
			})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-line bg-ink text-cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-5xl gap-8 px-4 py-10 md:grid-cols-2 md:items-end",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-harbour-mist",
					children: "三日自由行攻略"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-4xl leading-tight md:text-5xl",
					children: "先把路走对，再把东西吃对。"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xl text-sm leading-relaxed text-harbour-mist",
					children: "不是把香港缩成一张地图。第一天几乎不出港岛，第二天中午过海去北角赶廉署开门，第三天整日留在大屿山。点景点看出口、步行、打卡位和附近吃什么。"
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid grid-cols-2 gap-2 text-sm",
				children: MUST.map((id) => {
					const s = spotById[id];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-lg bg-ink-mid px-3 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-harbour-mist",
							children: s.area
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-medium",
							children: s.name
						})]
					}, id);
				})
			})]
		})
	});
}
function Itinerary({ day, dayId, onPickDay, onOpen }) {
	const meals = mealPlan.find((m) => m.day === dayId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-5xl space-y-8 px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TripOverview, {
				active: dayId,
				onPick: onPickDay
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: days.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onPickDay(d.id),
					className: cn("h-11 rounded-full px-4 text-sm font-medium", d.id === dayId ? "bg-harbour text-cream" : "bg-paper-2 text-fg hover:bg-paper-3"),
					children: [
						d.name,
						" · ",
						d.kicker
					]
				}, d.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "overflow-hidden rounded-xl border border-line bg-paper-2 shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-video",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: day.image,
							alt: day.name,
							className: "size-full object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/40" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-0 p-5 text-cream",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs tracking-widest text-harbour-mist",
									children: day.kicker
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-1 font-display text-2xl",
									children: day.subtitle
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-harbour-mist",
									children: day.zone
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayFlow, { dayId })]
			}),
			dayId === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IcacCallout, { onOpen }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl",
					children: "这一天的时间轴"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "点每一站看出口、怎么走、拍什么、附近吃什么。"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-4 space-y-3",
					children: day.items.map((item, i) => {
						const spot = spotById[item.spotId];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => onOpen(item.spotId),
							className: "flex w-full gap-3 rounded-xl border border-line bg-paper-2 p-4 text-left shadow-card transition-shadow hover:shadow-card-hover",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-14 shrink-0 font-mono text-sm text-harbour",
									children: item.time
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0 flex-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex flex-wrap items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-medium",
												children: item.title
											}), spot?.mustSee ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-vermillion px-2 py-0.5 text-xs text-cream",
												children: "必去"
											}) : null]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 block text-sm leading-relaxed text-muted",
											children: item.note
										}),
										item.eat ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "mt-2 inline-flex items-center gap-1 text-sm text-harbour-deep",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Utensils, { className: "size-3.5" }), item.eat]
										}) : null,
										spot?.exit ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "mt-1 block text-xs text-faint",
											children: [
												spot.metro,
												" · ",
												spot.exit
											]
										}) : null
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "mt-1 size-4 shrink-0 text-faint" })
							]
						}) }, `${item.time}-${item.spotId}-${i}`);
					})
				})
			] }),
			meals ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-line bg-paper-2 p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "flex items-center gap-2 font-display text-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Utensils, { className: "size-5 text-harbour" }), "这一天吃什么"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: meals.hint
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-4",
						children: meals.meals.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "border-t border-line pt-4 first:border-t-0 first:pt-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs tracking-widest text-faint",
									children: [
										m.time,
										" · ",
										m.slot
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-medium",
									children: m.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm leading-relaxed",
									children: m.order
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: m.where
								}),
								m.alt !== "—" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-sm text-harbour-deep",
									children: ["备选：", m.alt]
								}) : null
							]
						}, m.time))
					})
				]
			}) : null
		]
	})] });
}
function IcacCallout({ onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "rounded-xl border border-line bg-harbour-mist p-5 text-harbour-deep",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest",
				children: "廉政公署展览厅 · 不要走空"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-2 font-display text-xl text-fg",
				children: "平日 14:00 才开门，周日及公众假期关闭，全程免预约。"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-3 space-y-1 text-sm leading-relaxed text-fg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "北角站 A1 出闸，渣华道向东（海在左手边）8–10 分钟到 303 号。" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "地下大堂排队，职员分批放人上 2 楼。13:50 到即可。" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "看完下 G 层「一九七四」点廉署咖啡。国庆月有 303 巴士站打卡。17:00 关。" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "2026 年 10 月 1–3、5–7 日特别开放 10:00–17:00（展厅 13:00–14:00 休息）；10 月 4 日仍休息。" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onOpen("icac"),
					className: "h-10 rounded-full bg-ink px-4 text-sm text-cream",
					children: "看展览厅详情"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onOpen("cafe1974"),
					className: "h-10 rounded-full bg-paper px-4 text-sm text-fg",
					children: "看咖啡厅打卡"
				})]
			})
		]
	});
}
function FoodSection({ onOpen, onPickDay }) {
	const groups = (0, import_react.useMemo)(() => {
		return [
			"早餐",
			"午餐",
			"下午茶",
			"咖啡",
			"晚餐",
			"甜品",
			"伴手礼"
		].map((slot) => ({
			slot,
			items: restaurants.filter((r) => r.slot === slot)
		})).filter((g) => g.items.length);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-5xl space-y-10 px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-harbour",
					children: "跟着路线吃"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl",
					children: "三日餐单，不必为一家店跨区。"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-sm leading-relaxed text-muted",
					children: "茶餐厅不预约、点菜一次说完。澳牛只收现金且周四公休。兰芳园周日休息。蛋挞热的才有意义。"
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-3",
				children: mealPlan.map((plan) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-xl border border-line bg-paper-2 p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs tracking-widest text-faint",
							children: [
								"第 ",
								plan.day,
								" 天 · ",
								plan.title
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: plan.hint
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-3",
							children: plan.meals.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-harbour",
									children: [
										m.time,
										" ",
										m.slot
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium",
									children: m.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm leading-relaxed text-muted",
									children: m.order
								})
							] }, m.slot))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => onPickDay(plan.day),
							className: "mt-4 h-10 w-full rounded-full bg-ink text-sm text-cream",
							children: "看这一天行程"
						})
					]
				}, plan.day))
			}),
			groups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-xl",
				children: g.slot
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 grid gap-3 md:grid-cols-2",
				children: g.items.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl border border-line bg-paper-2 p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: r.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-harbour-deep",
								children: r.dish
							})] }), r.day ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rounded-full bg-paper-3 px-2 py-0.5 text-xs text-muted",
								children: [
									"第 ",
									r.day,
									" 天"
								]
							}) : null]
						}),
						r.order ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed",
							children: r.order
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: r.address
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: r.metro
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-xs text-faint",
							children: [
								r.price,
								r.hours ? ` · ${r.hours}` : "",
								r.book ? ` · ${r.book}` : ""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: r.note
						})
					]
				}, r.name))
			})] }, g.slot)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					"想对照景点走法，可打开",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "underline",
						onClick: () => onOpen("lanfong"),
						children: "中环早餐"
					}),
					"、",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "underline",
						onClick: () => onOpen("mongkok"),
						children: "旺角"
					}),
					"、",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "underline",
						onClick: () => onOpen("cafe1974"),
						children: "一九七四"
					}),
					"。"
				]
			})
		]
	});
}
function SpotsSection({ onOpen }) {
	const must = spots.filter((s) => s.mustSee);
	const rest = spots.filter((s) => !s.mustSee);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-5xl space-y-8 px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest text-harbour",
				children: "点进去看出口和打卡位"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-3xl",
				children: "景点手册"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpotGrid, {
				title: "四个必去",
				items: must,
				onOpen
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpotGrid, {
				title: "顺路加站",
				items: rest,
				onOpen
			})
		]
	});
}
function SpotGrid({ title, items, onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: "font-display text-xl",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
		children: items.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => onOpen(s.id),
			className: "overflow-hidden rounded-xl border border-line bg-paper-2 text-left shadow-card transition-shadow hover:shadow-card-hover",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: s.image,
				alt: s.name,
				className: "aspect-video w-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "block p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: s.name
						}), s.mustSee ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-vermillion px-2 py-0.5 text-xs text-cream",
							children: "必去"
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block text-sm text-muted",
						children: s.english
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mt-2 block text-xs text-faint",
						children: [s.metro, s.exit ? ` · ${s.exit}` : ""]
					})
				]
			})]
		}, s.id))
	})] });
}
function PrepSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-5xl space-y-10 px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest text-harbour",
				children: "出发前一天做完"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-3xl",
				children: "行李、证件、必装 App"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackCard, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "size-4" }),
						title: "证件与钱",
						items: packing.documents
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackCard, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "size-4" }),
						title: "电器",
						items: packing.electronics
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackCard, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Backpack, { className: "size-4" }),
						title: "衣服",
						items: packing.clothes
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackCard, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }),
						title: "药品及其他",
						items: [...packing.health, ...packing.others]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-xl",
				children: "必装 App"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 grid gap-3 md:grid-cols-2",
				children: apps.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl border border-line bg-paper-2 p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: a.name
							}), a.must ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-ink px-2 py-0.5 text-xs text-cream",
								children: "必装"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-faint",
								children: "选装"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs text-faint",
							children: [
								a.maker,
								" · ",
								a.category
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: a.why
						})
					]
				}, a.name))
			})] })
		]
	});
}
function PackCard({ icon, title, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-xl border border-line bg-paper-2 p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
			className: "flex items-center gap-2 font-display text-lg",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-harbour",
				children: icon
			}), title]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 space-y-2 text-sm leading-relaxed text-muted",
			children: items.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: x }, x))
		})]
	});
}
function MoveSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-5xl space-y-8 px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest text-harbour",
				children: "落地就会用到"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-3xl",
				children: "机场、港铁、的士、网络"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoveBlock, {
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrainFront, { className: "size-4" }),
				title: "机场",
				items: transportNotes.airport
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoveBlock, {
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "size-4" }),
				title: "港铁出口（容易走错）",
				items: transportNotes.mtr
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoveBlock, {
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bus, { className: "size-4" }),
				title: "巴士 / 小巴",
				items: transportNotes.bus
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoveBlock, {
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarFront, { className: "size-4" }),
				title: "的士",
				items: transportNotes.taxi
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoveBlock, {
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ship, { className: "size-4" }),
				title: "天星与叮叮",
				items: transportNotes.ferryTram
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoveBlock, {
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wifi, { className: "size-4" }),
				title: "网络",
				items: transportNotes.network
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoveBlock, {
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "size-4" }),
				title: "记住这几个出口",
				items: [
					"中环 J2：山顶缆车。中环 D2：阁麟街兰芳园。不要混用。",
					"北角 A1：渣华道去廉署。不要出 B（英皇道）。",
					"旺角 E2：金华冰厅。旺角 C3：朗豪坊添好运。",
					"油麻地 C：庙街。尖东 J：星光大道，出闸即海滨。",
					"佐敦 C2：澳洲牛奶公司，只收现金，周四休。",
					"迪士尼站只有一个方向。不要在东涌下车。"
				]
			})
		]
	});
}
function MoveBlock({ icon, title, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl border border-line bg-paper-2 p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
			className: "flex items-center gap-2 font-display text-lg",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-harbour",
				children: icon
			}), title]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 space-y-2 text-sm leading-relaxed text-muted",
			children: items.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: x }, x))
		})]
	});
}
function SpotDialog({ spot, onClose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: Boolean(spot),
		onOpenChange: (o) => !o && onClose(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-ink/50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "fixed inset-x-0 bottom-0 z-50 flex max-h-dvh flex-col overflow-hidden rounded-t-xl bg-paper shadow-card md:inset-y-8 md:left-1/2 md:right-auto md:w-full md:max-w-2xl md:-translate-x-1/2 md:rounded-xl",
			"aria-describedby": void 0,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3 border-b border-line bg-paper px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "min-w-0 truncate font-display text-lg",
					children: spot?.name ?? ""
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
					className: "flex size-11 items-center justify-center rounded-full hover:bg-paper-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: "关闭"
					})]
				})]
			}), spot ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-y-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpotBody, { spot })
			}) : null]
		})] })
	});
}
function SpotBody({ spot }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: spot.image,
			alt: spot.name,
			className: "aspect-video w-full object-cover"
		}),
		spot.imageCaption ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "px-5 pt-2 text-xs text-faint",
			children: spot.imageCaption
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6 px-5 py-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							spot.english,
							" · ",
							spot.area
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 leading-relaxed",
						children: spot.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-4 grid grid-cols-2 gap-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4" }),
								k: "时长",
								v: spot.duration
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ticket, { className: "size-4" }),
								k: "费用",
								v: spot.fee
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4" }),
								k: "地址",
								v: spot.address
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrainFront, { className: "size-4" }),
								k: "地铁",
								v: spot.metro
							})
						]
					})
				] }),
				spot.hoursRows?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarClock, { className: "size-4" }),
					title: "开放时间",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", {
						className: "w-full text-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: spot.hoursRows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-t border-line first:border-t-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-2 pr-3 text-left align-top font-medium",
								children: row.when
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-2 text-muted",
								children: row.open
							})]
						}, row.when)) })
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4" }),
					title: "开放时间",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed",
						children: spot.hours
					})
				}),
				spot.exit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoorOpen, { className: "size-4" }),
					title: "哪个口出来",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed",
						children: spot.exit
					})
				}) : null,
				spot.walk ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footprints, { className: "size-4" }),
					title: "出闸以后怎么走",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed",
						children: spot.walk
					})
				}) : null,
				spot.book ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarClock, { className: "size-4" }),
					title: "预约与门票",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed",
						children: spot.book
					})
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Block, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "size-4" }),
					title: spot.routeTitle,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mb-3 text-xs text-faint",
							children: [
								"从 ",
								spot.routeFrom,
								" 出发"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteMap, { kind: spot.mapKind }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-4 space-y-3",
							children: spot.steps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeChip, { mode: step.mode }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block leading-relaxed",
									children: step.text
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-xs text-faint",
									children: [step.time, step.cost].filter(Boolean).join(" · ")
								})] })]
							}, i))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4" }),
					title: "到了以后怎么玩",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2 text-sm leading-relaxed",
						children: spot.play.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: p }, p))
					})
				}),
				spot.photos?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "size-4" }),
					title: "打卡机位",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3",
						children: spot.photos.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-lg bg-paper-2 p-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium",
									children: p.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: p.how
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-sm text-harbour-deep",
									children: ["拍什么：", p.shot]
								})
							]
						}, p.name))
					})
				}) : null,
				spot.eats?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Utensils, { className: "size-4" }),
					title: "附近吃什么",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3",
						children: spot.eats.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-lg bg-paper-2 p-3 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-medium",
									children: [
										e.name,
										" · ",
										e.dish
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-muted",
									children: [
										e.address,
										" · ",
										e.metro
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-muted",
									children: [e.price, e.book ? ` · ${e.book}` : ""]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 leading-relaxed",
									children: e.note
								})
							]
						}, e.name))
					})
				}) : null,
				spot.food?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: ["餐饮备忘：", spot.food.join(" · ")]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Backpack, { className: "size-4" }),
					title: "注意",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2 text-sm leading-relaxed text-muted",
						children: spot.tips.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t }, t))
					})
				})
			]
		})
	] });
}
function Info({ icon, k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg bg-paper-2 p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "flex items-center gap-1 text-xs text-faint",
			children: [icon, k]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 leading-snug",
			children: v
		})]
	});
}
function Block({ icon, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
		className: "mb-2 flex items-center gap-2 font-display text-lg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-harbour",
			children: icon
		}), title]
	}), children] });
}
//#endregion
export { Home as component };
