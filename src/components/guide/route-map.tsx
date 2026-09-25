import type { DayStop, MapKind, TravelMode } from "@/data/guide";
import { MODE_LABEL, dayFlows } from "@/data/guide";
import { cn } from "@/lib/utils";

interface Node {
  id: string;
  name: string;
  sub?: string;
}

interface Edge {
  from: string;
  to: string;
  label: string;
  mode: TravelMode;
}

const MAPS: Record<Exclude<MapKind, "overview">, { title: string; nodes: Node[]; edges: Edge[] }> = {
  peak: {
    title: "中环 J2 → 太平山",
    nodes: [
      { id: "mtr", name: "中环站 J2", sub: "不要出 D 口" },
      { id: "garden", name: "花园道 33 号", sub: "步行 8–10 分" },
      { id: "tram", name: "山顶缆车", sub: "上车坐右侧" },
      { id: "peak", name: "凌霄阁出站", sub: "先别进商场" },
      { id: "lugard", name: "卢吉道观景", sub: "日落前 40 分到位" },
      { id: "sky", name: "摩天台 428", sub: "天黑后再上" },
    ],
    edges: [
      { from: "mtr", to: "garden", label: "沿花园道上坡", mode: "walk" },
      { from: "garden", to: "tram", label: "电子票走已购票通道", mode: "walk" },
      { from: "tram", to: "peak", label: "约 8 分钟", mode: "funicular" },
      { from: "peak", to: "lugard", label: "左拐 Lugard Road", mode: "walk" },
      { from: "lugard", to: "sky", label: "回凌霄阁坐电梯", mode: "walk" },
    ],
  },
  icac: {
    title: "旺角 → 北角廉署",
    nodes: [
      { id: "mk", name: "旺角站", sub: "荃湾线往中环" },
      { id: "adm", name: "金钟站转乘", sub: "通道预留 5 分" },
      { id: "np", name: "北角站 A1", sub: "渣华道，不要出 B" },
      { id: "java", name: "渣华道向东", sub: "海在左手边" },
      { id: "bldg", name: "渣华道 303 号", sub: "8–10 分钟走到" },
      { id: "hall", name: "G 层排队上 2 楼", sub: "平日 14:00 开门" },
    ],
    edges: [
      { from: "mk", to: "adm", label: "约 4 站", mode: "mtr" },
      { from: "adm", to: "np", label: "港岛线往柴湾 4 站", mode: "mtr" },
      { from: "np", to: "java", label: "出 A1", mode: "walk" },
      { from: "java", to: "bldg", label: "经市政大厦 99 号", mode: "walk" },
      { from: "bldg", to: "hall", label: "安检，免预约", mode: "walk" },
    ],
  },
  disney: {
    title: "市区 → 迪士尼站",
    nodes: [
      { id: "tst", name: "尖沙咀 / 中环", sub: "荃湾线" },
      { id: "lk", name: "荔景转东涌线", sub: "往东涌" },
      { id: "sb", name: "欣澳转迪士尼线", sub: "不要在东涌下" },
      { id: "dl", name: "迪士尼站", sub: "终点" },
      { id: "gate", name: "正门安检", sub: "有盖通道直达" },
    ],
    edges: [
      { from: "tst", to: "lk", label: "往荃湾方向", mode: "mtr" },
      { from: "lk", to: "sb", label: "东涌线", mode: "mtr" },
      { from: "sb", to: "dl", label: "专用短线", mode: "mtr" },
      { from: "dl", to: "gate", label: "出闸即走", mode: "walk" },
    ],
  },
  harbour: {
    title: "湾仔海滨 / 维港",
    nodes: [
      { id: "central", name: "德辅道中东行站", sub: "叮叮" },
      { id: "wanchai", name: "湾仔 / 修顿下车", sub: "不要坐过" },
      { id: "square", name: "金紫荆广场", sub: "向北过会展" },
      { id: "back", name: "港铁回中环", sub: "去 J2 赶缆车" },
    ],
    edges: [
      { from: "central", to: "wanchai", label: "15–20 分", mode: "tram" },
      { from: "wanchai", to: "square", label: "步行 10 分", mode: "walk" },
      { from: "square", to: "back", label: "不要再坐叮叮", mode: "mtr" },
    ],
  },
  wanchai: {
    title: "湾仔海滨 → Bakehouse",
    nodes: [
      { id: "tram", name: "湾仔叮叮下车", sub: "修顿 / 轩尼诗道" },
      { id: "square", name: "金紫荆广场", sub: "会展海滨" },
      { id: "bake", name: "Bakehouse 大王东街 14 号", sub: "湾仔 B2 约 4 分" },
      { id: "mtr", name: "湾仔 / 会展站", sub: "港岛线回中环" },
    ],
    edges: [
      { from: "tram", to: "square", label: "向北 8–12 分", mode: "walk" },
      { from: "square", to: "bake", label: "地图导航 10 分", mode: "walk" },
      { from: "bake", to: "mtr", label: "一站回中环 J2", mode: "mtr" },
    ],
  },
  central: {
    title: "中环步行串线",
    nodes: [
      { id: "breakfast", name: "中环 D2", sub: "阁麟街兰芳园" },
      { id: "manmo", name: "文武庙", sub: "荷李活道 124 号" },
      { id: "stone", name: "石板街", sub: "砵典乍街" },
      { id: "esc", name: "半山扶梯", sub: "10:00 后上行" },
      { id: "tk", name: "大馆", sub: "荷李活道 10 号" },
    ],
    edges: [
      { from: "breakfast", to: "manmo", label: "荷李活道向西 6–8 分", mode: "walk" },
      { from: "manmo", to: "stone", label: "回头向东 4 分", mode: "walk" },
      { from: "stone", to: "esc", label: "接回荷李活道", mode: "walk" },
      { from: "esc", to: "tk", label: "士丹顿街下，奥卑利街", mode: "walk" },
    ],
  },
  mongkok: {
    title: "旺角街区",
    nodes: [
      { id: "stn", name: "旺角站 E2", sub: "出闸" },
      { id: "kam", name: "金华冰厅", sub: "花园街 47 号" },
      { id: "ladies", name: "女人街", sub: "通菜街" },
      { id: "langham", name: "朗豪坊", sub: "C3 通道" },
      { id: "lunch", name: "添好运 / 富临", sub: "12:30 前吃完" },
    ],
    edges: [
      { from: "stn", to: "kam", label: "向南 3 分", mode: "walk" },
      { from: "kam", to: "ladies", label: "平行一条街", mode: "walk" },
      { from: "ladies", to: "langham", label: "亚皆老街", mode: "walk" },
      { from: "langham", to: "lunch", label: "然后上港铁过海", mode: "walk" },
    ],
  },
  ferry: {
    title: "中环码头 → 尖沙咀",
    nodes: [
      { id: "lower", name: "花园道缆车总站", sub: "下山" },
      { id: "pier", name: "中环天星码头", sub: "步行或 15C" },
      { id: "deck", name: "上层甲板", sub: "拍八达通" },
      { id: "tst", name: "尖沙咀码头", sub: "钟楼" },
      { id: "ave", name: "星光大道", sub: "海滨向东" },
    ],
    edges: [
      { from: "lower", to: "pier", label: "12–15 分", mode: "walk" },
      { from: "pier", to: "deck", label: "入闸走上层", mode: "walk" },
      { from: "deck", to: "tst", label: "8–10 分", mode: "ferry" },
      { from: "tst", to: "ave", label: "2 分", mode: "walk" },
    ],
  },
  temple: {
    title: "北角 → 庙街 → 尖东",
    nodes: [
      { id: "np", name: "北角站", sub: "港岛线往中环" },
      { id: "adm", name: "金钟", sub: "转荃湾线" },
      { id: "ytm", name: "油麻地 C", sub: "庙街" },
      { id: "tst", name: "尖东 J", sub: "星光大道" },
    ],
    edges: [
      { from: "np", to: "adm", label: "过海", mode: "mtr" },
      { from: "adm", to: "ytm", label: "往荃湾", mode: "mtr" },
      { from: "ytm", to: "tst", label: "晚饭后 1–2 站", mode: "mtr" },
    ],
  },
  jordan: {
    title: "佐敦澳牛",
    nodes: [
      { id: "stn", name: "佐敦站 C2", sub: "出闸" },
      { id: "adc", name: "白加士街 47 号", sub: "步行 2 分" },
    ],
    edges: [{ from: "stn", to: "adc", label: "宝灵街右转", mode: "walk" }],
  },
};

export function RouteMap({ kind }: { kind: MapKind }) {
  if (kind === "overview") return null;
  const data = MAPS[kind];
  if (!data) return null;

  return (
    <ol className="rounded-lg bg-ink px-4 py-4 text-cream">
      <p className="mb-3 text-xs tracking-widest text-harbour-mist">{data.title}</p>
      {data.nodes.map((node, i) => {
        const edge = data.edges.find((e) => e.from === node.id);
        const last = i === data.nodes.length - 1;
        return (
          <li key={node.id} className="flex gap-3">
            <div className="flex w-7 shrink-0 flex-col items-center">
              <span className="flex size-7 items-center justify-center rounded-full border-2 border-cream font-mono text-xs">
                {i + 1}
              </span>
              {!last ? <span className="my-1 min-h-6 w-px flex-1 bg-harbour" /> : null}
            </div>
            <div className={last ? "pb-0" : "pb-4"}>
              <p className="text-sm font-medium">{node.name}</p>
              {node.sub ? <p className="text-xs text-faint">{node.sub}</p> : null}
              {edge ? (
                <p className="mt-1 text-xs text-harbour-mist">
                  {MODE_LABEL[edge.mode]} · {edge.label}
                </p>
              ) : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}

const ZONE_TONE: Record<DayStop["zone"], string> = {
  港岛: "bg-harbour-mist text-harbour-deep",
  九龙: "bg-paper-3 text-fg",
  大屿山: "bg-cream text-ink",
};

export function DayFlow({ dayId }: { dayId: 1 | 2 | 3 }) {
  const flow = dayFlows[dayId];
  return (
    <div className="bg-ink px-5 py-5 text-cream">
      <p className="text-xs tracking-widest text-harbour-mist">今日怎么走 · 按编号顺序，不是地图</p>
      <p className="mt-2 text-sm leading-relaxed text-harbour-mist">{flow.blurb}</p>
      <ol className="mt-4">
        {flow.stops.map((stop, i) => (
          <li key={stop.n} className="flex gap-3">
            <div className="flex w-8 shrink-0 flex-col items-center">
              <span className="flex size-8 items-center justify-center rounded-full bg-cream font-mono text-sm text-ink">
                {stop.n}
              </span>
              {i < flow.stops.length - 1 ? (
                <span className="my-1 min-h-5 w-px flex-1 bg-harbour" />
              ) : null}
            </div>
            <div className={i < flow.stops.length - 1 ? "pb-4" : ""}>
              <p className="text-sm font-medium">{stop.name}</p>
              <p className="mt-1 text-xs text-faint">{stop.how}</p>
              <span className={cn("mt-2 inline-flex rounded-full px-2 py-0.5 text-xs", ZONE_TONE[stop.zone])}>
                {stop.zone}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

const DAY_KEYS: { id: 1 | 2 | 3; title: string; lock: string }[] = [
  { id: 1, title: "第一天 · 港岛", lock: "16:00 必须回到中环 J2 赶缆车" },
  { id: 2, title: "第二天 · 九龙 + 北角", lock: "廉署平日 14:00 开门，周日闭馆，不预约" },
  { id: 3, title: "第三天 · 大屿山", lock: "荔景转东涌线，欣澳转迪士尼线，不要在东涌下" },
];

export function TripOverview({
  active,
  onPick,
}: {
  active: 1 | 2 | 3;
  onPick: (id: 1 | 2 | 3) => void;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-ink text-cream">
      <div className="border-b border-harbour-deep px-5 py-4">
        <p className="text-xs tracking-widest text-harbour-mist">三日总览 · 按天读，不要当地图找方向</p>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-harbour-mist">
          以前那种「把香港缩成一块」的图会让人懵：标签叠在一起，分不清先去哪。下面三列是<b className="font-medium text-cream">当天的顺序</b>。点一列，看这一天怎么走。
        </p>
      </div>
      <div className="grid md:grid-cols-3">
        {DAY_KEYS.map((day, idx) => {
          const flow = dayFlows[day.id];
          const on = active === day.id;
          return (
            <button
              key={day.id}
              type="button"
              onClick={() => onPick(day.id)}
              className={cn(
                "px-5 py-5 text-left transition-colors",
                idx < 2 && "border-b border-harbour-deep md:border-b-0 md:border-r",
                on ? "bg-ink-mid" : "hover:bg-ink-soft",
              )}
            >
              <p className="text-xs tracking-widest text-harbour-mist">{day.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-faint">{day.lock}</p>
              <ol className="mt-4 space-y-2">
                {flow.stops.map((stop) => (
                  <li key={stop.n} className="flex gap-2 text-sm">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-cream font-mono text-xs text-ink">
                      {stop.n}
                    </span>
                    <span>
                      <span className="block font-medium">{stop.name}</span>
                      <span className="block text-xs text-faint">{stop.how}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function ModeChip({ mode }: { mode: TravelMode }) {
  return (
    <span
      className={cn(
        "inline-flex h-6 items-center rounded-full px-2 text-xs font-medium",
        mode === "walk" && "bg-paper-2 text-muted",
        (mode === "mtr" || mode === "ferry") && "bg-harbour-mist text-harbour-deep",
        mode === "funicular" && "bg-paper-3 text-fg",
        (mode === "tram" || mode === "bus" || mode === "minibus") && "bg-paper-2 text-fg",
        mode === "taxi" && "bg-paper-3 text-vermillion",
      )}
    >
      {MODE_LABEL[mode]}
    </span>
  );
}
