import { createFileRoute } from "@tanstack/react-router";
import * as Dialog from "@radix-ui/react-dialog";
import {
  ArrowRight,
  Backpack,
  Bus,
  CalendarClock,
  Camera,
  CarFront,
  Clock,
  CreditCard,
  DoorOpen,
  Footprints,
  MapPin,
  Navigation,
  Phone,
  Ship,
  Smartphone,
  Ticket,
  TrainFront,
  Utensils,
  Wallet,
  Wifi,
  X,
} from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import { DayFlow, ModeChip, RouteMap, TripOverview } from "@/components/guide/route-map";
import {
  apps,
  days,
  mealPlan,
  notices,
  packing,
  restaurants,
  spotById,
  spots,
  transportNotes,
  type DayPlan,
  type Spot,
} from "@/data/guide";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

type Tab = "days" | "food" | "spots" | "prep" | "move";

const TABS: { id: Tab; label: string }[] = [
  { id: "days", label: "三日行程" },
  { id: "food", label: "吃什么" },
  { id: "spots", label: "景点" },
  { id: "prep", label: "行前" },
  { id: "move", label: "交通" },
];

const MUST = ["disney", "icac", "peak", "harbour"] as const;

function Home() {
  const [tab, setTab] = useState<Tab>("days");
  const [dayId, setDayId] = useState<1 | 2 | 3>(1);
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
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
      if (TABS.some((t) => t.id === h)) setTab(h as Tab);
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  const openSpot = (id: string) => {
    setOpenId(id);
    window.history.replaceState(null, "", `#spot-${id}`);
  };

  const closeSpot = () => {
    setOpenId(null);
    const next = tab === "days" ? `#day-${dayId}` : `#${tab}`;
    window.history.replaceState(null, "", next);
  };

  const goTab = (id: Tab) => {
    setTab(id);
    window.history.replaceState(null, "", `#${id}`);
  };

  const pickDay = (id: 1 | 2 | 3) => {
    setDayId(id);
    setTab("days");
    window.history.replaceState(null, "", `#day-${id}`);
  };

  const day = days.find((d) => d.id === dayId) ?? days[0];
  const openSpotData = openId ? spotById[openId] : undefined;

  return (
    <div className="min-h-dvh bg-paper text-fg">
      <header className="sticky top-0 z-40 border-b border-line bg-paper">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3">
          <div>
            <p className="font-display text-lg leading-none">香江三日</p>
            <p className="mt-1 text-xs text-muted">香港自由行 · 路线、出口、吃什么</p>
          </div>
          <p className="hidden text-xs text-faint sm:block">迪士尼 · 廉署 · 太平山 · 维港</p>
        </div>
        <nav className="mx-auto flex max-w-5xl gap-1 overflow-x-auto px-4 pb-2">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => goTab(t.id)}
              className={cn(
                "h-10 shrink-0 rounded-full px-4 text-sm font-medium transition-colors",
                tab === t.id ? "bg-ink text-cream" : "text-muted hover:bg-paper-2",
              )}
            >
              {t.label}
            </button>
          ))}
        </nav>
      </header>

      {tab === "days" ? (
        <Itinerary day={day} dayId={dayId} onPickDay={pickDay} onOpen={openSpot} />
      ) : null}
      {tab === "food" ? <FoodSection onOpen={openSpot} onPickDay={pickDay} /> : null}
      {tab === "spots" ? <SpotsSection onOpen={openSpot} /> : null}
      {tab === "prep" ? <PrepSection /> : null}
      {tab === "move" ? <MoveSection /> : null}

      <footer className="border-t border-line px-4 py-10">
        <div className="mx-auto max-w-5xl text-sm text-muted">
          {notices.map((n) => (
            <p key={n} className="leading-relaxed">
              {n}
            </p>
          ))}
          <p className="mt-4 text-xs text-faint">票价、班次、开园以官方当日公布为准。</p>
        </div>
      </footer>

      <SpotDialog spot={openSpotData} onClose={closeSpot} />
    </div>
  );
}

function Hero() {
  return (
    <section className="border-b border-line bg-ink text-cream">
      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-10 md:grid-cols-2 md:items-end">
        <div>
          <p className="text-xs tracking-widest text-harbour-mist">三日自由行攻略</p>
          <h1 className="mt-3 font-display text-4xl leading-tight md:text-5xl">先把路走对，再把东西吃对。</h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-harbour-mist">
            不是把香港缩成一张地图。第一天几乎不出港岛，第二天中午过海去北角赶廉署开门，第三天整日留在大屿山。点景点看出口、步行、打卡位和附近吃什么。
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-2 text-sm">
          {MUST.map((id) => {
            const s = spotById[id];
            return (
              <li key={id} className="rounded-lg bg-ink-mid px-3 py-3">
                <p className="text-xs text-harbour-mist">{s.area}</p>
                <p className="mt-1 font-medium">{s.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function Itinerary({
  day,
  dayId,
  onPickDay,
  onOpen,
}: {
  day: DayPlan;
  dayId: 1 | 2 | 3;
  onPickDay: (id: 1 | 2 | 3) => void;
  onOpen: (id: string) => void;
}) {
  const meals = mealPlan.find((m) => m.day === dayId);

  return (
    <>
      <Hero />
      <main className="mx-auto max-w-5xl space-y-8 px-4 py-8">
        <TripOverview active={dayId} onPick={onPickDay} />

        <div className="flex flex-wrap gap-2">
          {days.map((d) => (
            <button
              key={d.id}
              type="button"
              onClick={() => onPickDay(d.id)}
              className={cn(
                "h-11 rounded-full px-4 text-sm font-medium",
                d.id === dayId ? "bg-harbour text-cream" : "bg-paper-2 text-fg hover:bg-paper-3",
              )}
            >
              {d.name} · {d.kicker}
            </button>
          ))}
        </div>

        <article className="overflow-hidden rounded-xl border border-line bg-paper-2 shadow-card">
          <div className="relative aspect-video">
            <img src={day.image} alt={day.name} className="size-full object-cover" />
            <div className="absolute inset-0 bg-ink/40" />
            <div className="absolute bottom-0 p-5 text-cream">
              <p className="text-xs tracking-widest text-harbour-mist">{day.kicker}</p>
              <h2 className="mt-1 font-display text-2xl">{day.subtitle}</h2>
              <p className="mt-2 text-sm text-harbour-mist">{day.zone}</p>
            </div>
          </div>
          <DayFlow dayId={dayId} />
        </article>

        {dayId === 2 ? <IcacCallout onOpen={onOpen} /> : null}

        <section>
          <h3 className="font-display text-xl">这一天的时间轴</h3>
          <p className="mt-1 text-sm text-muted">点每一站看出口、怎么走、拍什么、附近吃什么。</p>
          <ol className="mt-4 space-y-3">
            {day.items.map((item, i) => {
              const spot = spotById[item.spotId];
              return (
                <li key={`${item.time}-${item.spotId}-${i}`}>
                  <button
                    type="button"
                    onClick={() => onOpen(item.spotId)}
                    className="flex w-full gap-3 rounded-xl border border-line bg-paper-2 p-4 text-left shadow-card transition-shadow hover:shadow-card-hover"
                  >
                    <span className="w-14 shrink-0 font-mono text-sm text-harbour">{item.time}</span>
                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-center gap-2">
                        <span className="font-medium">{item.title}</span>
                        {spot?.mustSee ? (
                          <span className="rounded-full bg-vermillion px-2 py-0.5 text-xs text-cream">必去</span>
                        ) : null}
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-muted">{item.note}</span>
                      {item.eat ? (
                        <span className="mt-2 inline-flex items-center gap-1 text-sm text-harbour-deep">
                          <Utensils className="size-3.5" />
                          {item.eat}
                        </span>
                      ) : null}
                      {spot?.exit ? (
                        <span className="mt-1 block text-xs text-faint">
                          {spot.metro} · {spot.exit}
                        </span>
                      ) : null}
                    </span>
                    <ArrowRight className="mt-1 size-4 shrink-0 text-faint" />
                  </button>
                </li>
              );
            })}
          </ol>
        </section>

        {meals ? (
          <section className="rounded-xl border border-line bg-paper-2 p-5">
            <h3 className="flex items-center gap-2 font-display text-xl">
              <Utensils className="size-5 text-harbour" />
              这一天吃什么
            </h3>
            <p className="mt-1 text-sm text-muted">{meals.hint}</p>
            <ul className="mt-4 space-y-4">
              {meals.meals.map((m) => (
                <li key={m.time} className="border-t border-line pt-4 first:border-t-0 first:pt-0">
                  <p className="text-xs tracking-widest text-faint">
                    {m.time} · {m.slot}
                  </p>
                  <p className="mt-1 font-medium">{m.name}</p>
                  <p className="mt-1 text-sm leading-relaxed">{m.order}</p>
                  <p className="mt-1 text-sm text-muted">{m.where}</p>
                  {m.alt !== "—" ? <p className="mt-1 text-sm text-harbour-deep">备选：{m.alt}</p> : null}
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </main>
    </>
  );
}

function IcacCallout({ onOpen }: { onOpen: (id: string) => void }) {
  return (
    <aside className="rounded-xl border border-line bg-harbour-mist p-5 text-harbour-deep">
      <p className="text-xs tracking-widest">廉政公署展览厅 · 不要走空</p>
      <h3 className="mt-2 font-display text-xl text-fg">平日 14:00 才开门，周日及公众假期关闭，全程免预约。</h3>
      <ul className="mt-3 space-y-1 text-sm leading-relaxed text-fg">
        <li>北角站 A1 出闸，渣华道向东（海在左手边）8–10 分钟到 303 号。</li>
        <li>地下大堂排队，职员分批放人上 2 楼。13:50 到即可。</li>
        <li>看完下 G 层「一九七四」点廉署咖啡。国庆月有 303 巴士站打卡。17:00 关。</li>
        <li>2026 年 10 月 1–3、5–7 日特别开放 10:00–17:00（展厅 13:00–14:00 休息）；10 月 4 日仍休息。</li>
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => onOpen("icac")}
          className="h-10 rounded-full bg-ink px-4 text-sm text-cream"
        >
          看展览厅详情
        </button>
        <button
          type="button"
          onClick={() => onOpen("cafe1974")}
          className="h-10 rounded-full bg-paper px-4 text-sm text-fg"
        >
          看咖啡厅打卡
        </button>
      </div>
    </aside>
  );
}

function FoodSection({
  onOpen,
  onPickDay,
}: {
  onOpen: (id: string) => void;
  onPickDay: (id: 1 | 2 | 3) => void;
}) {
  const groups = useMemo(() => {
    const slots = ["早餐", "午餐", "下午茶", "咖啡", "晚餐", "甜品", "伴手礼"] as const;
    return slots
      .map((slot) => ({ slot, items: restaurants.filter((r) => r.slot === slot) }))
      .filter((g) => g.items.length);
  }, []);

  return (
    <main className="mx-auto max-w-5xl space-y-10 px-4 py-8">
      <header>
        <p className="text-xs tracking-widest text-harbour">跟着路线吃</p>
        <h2 className="mt-2 font-display text-3xl">三日餐单，不必为一家店跨区。</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          茶餐厅不预约、点菜一次说完。澳牛只收现金且周四公休。兰芳园周日休息。蛋挞热的才有意义。
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {mealPlan.map((plan) => (
          <section key={plan.day} className="rounded-xl border border-line bg-paper-2 p-5">
            <p className="text-xs tracking-widest text-faint">第 {plan.day} 天 · {plan.title}</p>
            <p className="mt-2 text-sm text-muted">{plan.hint}</p>
            <ul className="mt-4 space-y-3">
              {plan.meals.map((m) => (
                <li key={m.slot}>
                  <p className="text-xs text-harbour">
                    {m.time} {m.slot}
                  </p>
                  <p className="font-medium">{m.name}</p>
                  <p className="text-sm leading-relaxed text-muted">{m.order}</p>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => onPickDay(plan.day)}
              className="mt-4 h-10 w-full rounded-full bg-ink text-sm text-cream"
            >
              看这一天行程
            </button>
          </section>
        ))}
      </div>

      {groups.map((g) => (
        <section key={g.slot}>
          <h3 className="font-display text-xl">{g.slot}</h3>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            {g.items.map((r) => (
              <article key={r.name} className="rounded-xl border border-line bg-paper-2 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-medium">{r.name}</p>
                    <p className="text-sm text-harbour-deep">{r.dish}</p>
                  </div>
                  {r.day ? (
                    <span className="rounded-full bg-paper-3 px-2 py-0.5 text-xs text-muted">第 {r.day} 天</span>
                  ) : null}
                </div>
                {r.order ? <p className="mt-2 text-sm leading-relaxed">{r.order}</p> : null}
                <p className="mt-2 text-sm text-muted">{r.address}</p>
                <p className="text-sm text-muted">{r.metro}</p>
                <p className="mt-2 text-xs text-faint">
                  {r.price}
                  {r.hours ? ` · ${r.hours}` : ""}
                  {r.book ? ` · ${r.book}` : ""}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{r.note}</p>
              </article>
            ))}
          </div>
        </section>
      ))}

      <p className="text-sm text-muted">
        想对照景点走法，可打开{" "}
        <button type="button" className="underline" onClick={() => onOpen("lanfong")}>
          中环早餐
        </button>
        、
        <button type="button" className="underline" onClick={() => onOpen("mongkok")}>
          旺角
        </button>
        、
        <button type="button" className="underline" onClick={() => onOpen("cafe1974")}>
          一九七四
        </button>
        。
      </p>
    </main>
  );
}

function SpotsSection({ onOpen }: { onOpen: (id: string) => void }) {
  const must = spots.filter((s) => s.mustSee);
  const rest = spots.filter((s) => !s.mustSee);

  return (
    <main className="mx-auto max-w-5xl space-y-8 px-4 py-8">
      <header>
        <p className="text-xs tracking-widest text-harbour">点进去看出口和打卡位</p>
        <h2 className="mt-2 font-display text-3xl">景点手册</h2>
      </header>
      <SpotGrid title="四个必去" items={must} onOpen={onOpen} />
      <SpotGrid title="顺路加站" items={rest} onOpen={onOpen} />
    </main>
  );
}

function SpotGrid({
  title,
  items,
  onOpen,
}: {
  title: string;
  items: Spot[];
  onOpen: (id: string) => void;
}) {
  return (
    <section>
      <h3 className="font-display text-xl">{title}</h3>
      <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => onOpen(s.id)}
            className="overflow-hidden rounded-xl border border-line bg-paper-2 text-left shadow-card transition-shadow hover:shadow-card-hover"
          >
            <img src={s.image} alt={s.name} className="aspect-video w-full object-cover" />
            <span className="block p-4">
              <span className="flex items-center gap-2">
                <span className="font-medium">{s.name}</span>
                {s.mustSee ? (
                  <span className="rounded-full bg-vermillion px-2 py-0.5 text-xs text-cream">必去</span>
                ) : null}
              </span>
              <span className="mt-1 block text-sm text-muted">{s.english}</span>
              <span className="mt-2 block text-xs text-faint">
                {s.metro}
                {s.exit ? ` · ${s.exit}` : ""}
              </span>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

function PrepSection() {
  return (
    <main className="mx-auto max-w-5xl space-y-10 px-4 py-8">
      <header>
        <p className="text-xs tracking-widest text-harbour">出发前一天做完</p>
        <h2 className="mt-2 font-display text-3xl">行李、证件、必装 App</h2>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        <PackCard icon={<Wallet className="size-4" />} title="证件与钱" items={packing.documents} />
        <PackCard icon={<Smartphone className="size-4" />} title="电器" items={packing.electronics} />
        <PackCard icon={<Backpack className="size-4" />} title="衣服" items={packing.clothes} />
        <PackCard icon={<Phone className="size-4" />} title="药品及其他" items={[...packing.health, ...packing.others]} />
      </div>
      <section>
        <h3 className="font-display text-xl">必装 App</h3>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          {apps.map((a) => (
            <article key={a.name} className="rounded-xl border border-line bg-paper-2 p-4">
              <div className="flex items-center justify-between gap-2">
                <p className="font-medium">{a.name}</p>
                {a.must ? (
                  <span className="rounded-full bg-ink px-2 py-0.5 text-xs text-cream">必装</span>
                ) : (
                  <span className="text-xs text-faint">选装</span>
                )}
              </div>
              <p className="mt-1 text-xs text-faint">
                {a.maker} · {a.category}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{a.why}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function PackCard({ icon, title, items }: { icon: ReactNode; title: string; items: string[] }) {
  return (
    <article className="rounded-xl border border-line bg-paper-2 p-5">
      <h3 className="flex items-center gap-2 font-display text-lg">
        <span className="text-harbour">{icon}</span>
        {title}
      </h3>
      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
        {items.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </article>
  );
}

function MoveSection() {
  return (
    <main className="mx-auto max-w-5xl space-y-8 px-4 py-8">
      <header>
        <p className="text-xs tracking-widest text-harbour">落地就会用到</p>
        <h2 className="mt-2 font-display text-3xl">机场、港铁、的士、网络</h2>
      </header>
      <MoveBlock icon={<TrainFront className="size-4" />} title="机场" items={transportNotes.airport} />
      <MoveBlock icon={<Navigation className="size-4" />} title="港铁出口（容易走错）" items={transportNotes.mtr} />
      <MoveBlock icon={<Bus className="size-4" />} title="巴士 / 小巴" items={transportNotes.bus} />
      <MoveBlock icon={<CarFront className="size-4" />} title="的士" items={transportNotes.taxi} />
      <MoveBlock icon={<Ship className="size-4" />} title="天星与叮叮" items={transportNotes.ferryTram} />
      <MoveBlock icon={<Wifi className="size-4" />} title="网络" items={transportNotes.network} />
      <MoveBlock
        icon={<CreditCard className="size-4" />}
        title="记住这几个出口"
        items={[
          "中环 J2：山顶缆车。中环 D2：阁麟街兰芳园。不要混用。",
          "北角 A1：渣华道去廉署。不要出 B（英皇道）。",
          "旺角 E2：金华冰厅。旺角 C3：朗豪坊添好运。",
          "油麻地 C：庙街。尖东 J：星光大道，出闸即海滨。",
          "佐敦 C2：澳洲牛奶公司，只收现金，周四休。",
          "迪士尼站只有一个方向。不要在东涌下车。",
        ]}
      />
    </main>
  );
}

function MoveBlock({ icon, title, items }: { icon: ReactNode; title: string; items: string[] }) {
  return (
    <section className="rounded-xl border border-line bg-paper-2 p-5">
      <h3 className="flex items-center gap-2 font-display text-lg">
        <span className="text-harbour">{icon}</span>
        {title}
      </h3>
      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
        {items.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </section>
  );
}

function SpotDialog({ spot, onClose }: { spot?: Spot; onClose: () => void }) {
  return (
    <Dialog.Root open={Boolean(spot)} onOpenChange={(o) => !o && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/50" />
        <Dialog.Content
          className="fixed inset-x-0 bottom-0 z-50 flex max-h-dvh flex-col overflow-hidden rounded-t-xl bg-paper shadow-card md:inset-y-8 md:left-1/2 md:right-auto md:w-full md:max-w-2xl md:-translate-x-1/2 md:rounded-xl"
          aria-describedby={undefined}
        >
          <div className="flex items-center justify-between gap-3 border-b border-line bg-paper px-4 py-3">
            <Dialog.Title className="min-w-0 truncate font-display text-lg">
              {spot?.name ?? ""}
            </Dialog.Title>
            <Dialog.Close className="flex size-11 items-center justify-center rounded-full hover:bg-paper-2">
              <X className="size-5" />
              <span className="sr-only">关闭</span>
            </Dialog.Close>
          </div>
          {spot ? (
            <div className="overflow-y-auto">
              <SpotBody spot={spot} />
            </div>
          ) : null}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function SpotBody({ spot }: { spot: Spot }) {
  return (
    <div>
      <img src={spot.image} alt={spot.name} className="aspect-video w-full object-cover" />
      {spot.imageCaption ? (
        <p className="px-5 pt-2 text-xs text-faint">{spot.imageCaption}</p>
      ) : null}
      <div className="space-y-6 px-5 py-5">
        <header>
          <p className="text-sm text-muted">
            {spot.english} · {spot.area}
          </p>
          <p className="mt-2 leading-relaxed">{spot.summary}</p>
          <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <Info icon={<Clock className="size-4" />} k="时长" v={spot.duration} />
            <Info icon={<Ticket className="size-4" />} k="费用" v={spot.fee} />
            <Info icon={<MapPin className="size-4" />} k="地址" v={spot.address} />
            <Info icon={<TrainFront className="size-4" />} k="地铁" v={spot.metro} />
          </dl>
        </header>

        {spot.hoursRows?.length ? (
          <Block icon={<CalendarClock className="size-4" />} title="开放时间">
            <table className="w-full text-sm">
              <tbody>
                {spot.hoursRows.map((row) => (
                  <tr key={row.when} className="border-t border-line first:border-t-0">
                    <th className="py-2 pr-3 text-left align-top font-medium">{row.when}</th>
                    <td className="py-2 text-muted">{row.open}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Block>
        ) : (
          <Block icon={<Clock className="size-4" />} title="开放时间">
            <p className="text-sm leading-relaxed">{spot.hours}</p>
          </Block>
        )}

        {spot.exit ? (
          <Block icon={<DoorOpen className="size-4" />} title="哪个口出来">
            <p className="text-sm leading-relaxed">{spot.exit}</p>
          </Block>
        ) : null}

        {spot.walk ? (
          <Block icon={<Footprints className="size-4" />} title="出闸以后怎么走">
            <p className="text-sm leading-relaxed">{spot.walk}</p>
          </Block>
        ) : null}

        {spot.book ? (
          <Block icon={<CalendarClock className="size-4" />} title="预约与门票">
            <p className="text-sm leading-relaxed">{spot.book}</p>
          </Block>
        ) : null}

        <Block icon={<Navigation className="size-4" />} title={spot.routeTitle}>
          <p className="mb-3 text-xs text-faint">从 {spot.routeFrom} 出发</p>
          <RouteMap kind={spot.mapKind} />
          <ol className="mt-4 space-y-3">
            {spot.steps.map((step, i) => (
              <li key={i} className="flex gap-3 text-sm">
                <ModeChip mode={step.mode} />
                <span>
                  <span className="block leading-relaxed">{step.text}</span>
                  <span className="mt-1 block text-xs text-faint">
                    {[step.time, step.cost].filter(Boolean).join(" · ")}
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </Block>

        <Block icon={<MapPin className="size-4" />} title="到了以后怎么玩">
          <ul className="space-y-2 text-sm leading-relaxed">
            {spot.play.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </Block>

        {spot.photos?.length ? (
          <Block icon={<Camera className="size-4" />} title="打卡机位">
            <ul className="space-y-3">
              {spot.photos.map((p) => (
                <li key={p.name} className="rounded-lg bg-paper-2 p-3">
                  <p className="font-medium">{p.name}</p>
                  <p className="mt-1 text-sm text-muted">{p.how}</p>
                  <p className="mt-1 text-sm text-harbour-deep">拍什么：{p.shot}</p>
                </li>
              ))}
            </ul>
          </Block>
        ) : null}

        {spot.eats?.length ? (
          <Block icon={<Utensils className="size-4" />} title="附近吃什么">
            <ul className="space-y-3">
              {spot.eats.map((e) => (
                <li key={e.name} className="rounded-lg bg-paper-2 p-3 text-sm">
                  <p className="font-medium">
                    {e.name} · {e.dish}
                  </p>
                  <p className="mt-1 text-muted">
                    {e.address} · {e.metro}
                  </p>
                  <p className="mt-1 text-muted">
                    {e.price}
                    {e.book ? ` · ${e.book}` : ""}
                  </p>
                  <p className="mt-1 leading-relaxed">{e.note}</p>
                </li>
              ))}
            </ul>
          </Block>
        ) : null}

        {spot.food?.length ? (
          <p className="text-sm text-muted">餐饮备忘：{spot.food.join(" · ")}</p>
        ) : null}

        <Block icon={<Backpack className="size-4" />} title="注意">
          <ul className="space-y-2 text-sm leading-relaxed text-muted">
            {spot.tips.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Block>
      </div>
    </div>
  );
}

function Info({ icon, k, v }: { icon: ReactNode; k: string; v: string }) {
  return (
    <div className="rounded-lg bg-paper-2 p-3">
      <p className="flex items-center gap-1 text-xs text-faint">
        {icon}
        {k}
      </p>
      <p className="mt-1 leading-snug">{v}</p>
    </div>
  );
}

function Block({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <section>
      <h4 className="mb-2 flex items-center gap-2 font-display text-lg">
        <span className="text-harbour">{icon}</span>
        {title}
      </h4>
      {children}
    </section>
  );
}
