export type Sticker = {
  src: string;
  side: "left" | "right";
  top: string;
  left?: string;
  right?: string;
  rotate?: string;
  size?: number;
  w?: number;
  h?: number;
  tall?: number;
  round?: boolean;
};

export const ASSETS = {
  heroBg:
    "https://res.cloudinary.com/dolxoxj41/image/upload/f_auto,q_auto/4825eec8bd2a6f9752ab1d52e134427a_ykebw5",
  projectsBg:
    "https://res.cloudinary.com/dolxoxj41/image/upload/v1778619994/gavryl-for-inprnt_azvvz9.jpg",
  experiencePhoto:
    "https://res.cloudinary.com/dolxoxj41/image/upload/v1778620015/__1_v1ftj0.png",
  footerBg:
    "https://res.cloudinary.com/dolxoxj41/image/upload/v1778619955/e6d8fc8ebd8a6dde2e8ebba48def3843_ctcixb.jpg",
  stickers: [
    // ── Left side ──────────────────────────────────────────────────────
    // claude  → image_3 slot: Figma x=-69px→-5%, y=985→0%, rotate -17°
    { src: "https://res.cloudinary.com/dolxoxj41/image/upload/v1778622364/claude_hvmlsw.png",   side: "left",  top: "0%",  left: "2%",  rotate: "-17deg", size: 130, round: true },
    // figma   → image_9 slot: Figma x=197px→13%, y=1080→17%, rotate 15°
    { src: "https://res.cloudinary.com/dolxoxj41/image/upload/v1778622365/figma_mvld1j.png",    side: "left",  top: "17%", left: "13%",  rotate: "15deg",  size: 100, tall: 152 },
    // cursor  → image_12 slot: Figma x=-55px→-4%, y=1343→64%, rotate -19°
    { src: "https://res.cloudinary.com/dolxoxj41/image/upload/v1778622364/cursor_zcziru.png",   side: "left",  top: "64%", left: "1%",  rotate: "-19deg", size: 167, round: true },
    // ── Right side ─────────────────────────────────────────────────────
    // postgres → image_7 slot: right=-4%, top=2%, rotate 15°
    { src: "https://res.cloudinary.com/dolxoxj41/image/upload/v1778622367/postgres_zmiivh.png", side: "right", top: "2%",  right: "1%", rotate: "15deg",  w: 163, h: 168 },
    // redis    → image_8 slot: right=16%, top=-7%, rotate 15°
    { src: "https://res.cloudinary.com/dolxoxj41/image/upload/v1778622368/redis_jlwhdt.png",    side: "right", top: "-7%", right: "16%", rotate: "15deg",  w: 183, h: 157 },
    // react    → image_11 slot: right=9%, top=32%, round
    { src: "https://res.cloudinary.com/dolxoxj41/image/upload/v1778622368/react_wwugju.png",    side: "right", top: "32%", right: "9%",  rotate: "6deg",   w: 89, h:80
     },
    // next     → image_13 slot: right=14%, top=47%, rotate 23°
    { src: "https://res.cloudinary.com/dolxoxj41/image/upload/v1778622365/next_mjfamo.png",     side: "left", top: "47%", left: "14%", rotate: "23deg",  w: 110, h: 101 },
    // openai   → image_5 slot: right=-5%, top=57%, peeks right edge
    { src: "https://res.cloudinary.com/dolxoxj41/image/upload/v1778622366/openai_ogvqpj.png",   side: "right", top: "57%", right: "2%", rotate: "0deg",   size: 202 },
  ] as Sticker[],
} as const;
