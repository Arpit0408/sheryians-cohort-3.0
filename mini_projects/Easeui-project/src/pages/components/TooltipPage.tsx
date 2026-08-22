import { Tooltip } from "@/components/Tooltip/Tooltip";
import { Button } from "@/components/Button/Button";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";
import { Heart, Share2, Sparkles, Bell, Copy } from "lucide-react";
import { useState } from "react";

const TooltipPage = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const basicUsageCode = `import { Tooltip } from "@/components/Tooltip/Tooltip";
import { Button } from "@/components/Button/Button";

export default function Example() {
  return (
    <div className="flex gap-4">
      <Tooltip content="Tooltip on Top" position="top">
        <Button variant="primary">Top</Button>
      </Tooltip>

      <Tooltip content="Tooltip on Bottom" position="bottom">
        <Button variant="secondary">Bottom</Button>
      </Tooltip>

      <Tooltip content="Tooltip on Left" position="left">
        <Button variant="outline">Left</Button>
      </Tooltip>

      <Tooltip content="Tooltip on Right" position="right">
        <Button variant="dark">Right</Button>
      </Tooltip>
    </div>
  );
}`;

  const variantsCode = `<Tooltip content="Dark default theme" variant="dark">
  <Button variant="dark">Dark</Button>
</Tooltip>

<Tooltip content="Light modern theme" variant="light">
  <Button variant="outline">Light</Button>
</Tooltip>

<Tooltip content="Primary vibrant theme" variant="primary">
  <Button variant="primary">Primary</Button>
</Tooltip>

<Tooltip content="Backdrop frosted glass" variant="glass">
  <Button variant="secondary">Glass</Button>
</Tooltip>

<Tooltip content="Outlined bordered theme" variant="outline">
  <Button variant="ghost">Outline</Button>
</Tooltip>`;

  const richContentCode = `<Tooltip
  position="top"
  variant="dark"
  content={
    <div className="flex items-center gap-2 p-1">
      <Sparkles className="w-4 h-4 text-amber-400" />
      <div>
        <p className="font-semibold text-white">Pro Feature</p>
        <p className="text-xs text-gray-300">Unlock with premium membership</p>
      </div>
    </div>
  }
>
  <Button variant="primary">Hover for Details</Button>
</Tooltip>`;

  const propsData = [
    {
      prop: "content",
      type: "React.ReactNode",
      default: "-",
      description: "The content (text or element) to display inside the tooltip",
    },
    {
      prop: "children",
      type: "React.ReactNode",
      default: "-",
      description: "The target trigger element that activates the tooltip on hover/focus",
    },
    {
      prop: "position",
      type: '"top" | "bottom" | "left" | "right"',
      default: '"top"',
      description: "Placement of the tooltip relative to the target element",
    },
    {
      prop: "variant",
      type: '"dark" | "light" | "primary" | "outline" | "glass"',
      default: '"dark"',
      description: "Visual appearance and theme color styling of the tooltip",
    },
    {
      prop: "size",
      type: '"sm" | "md" | "lg"',
      default: '"md"',
      description: "Padding and font size sizing of the tooltip",
    },
    {
      prop: "delay",
      type: "number",
      default: "100",
      description: "Delay in milliseconds before the tooltip appears on hover",
    },
    {
      prop: "arrow",
      type: "boolean",
      default: "true",
      description: "Whether to render a pointing directional arrow on the tooltip",
    },
    {
      prop: "animation",
      type: '"fadeIn" | "scaleIn" | "slide" | "bounce" | "none"',
      default: '"scaleIn"',
      description: "Entrance animation type when the tooltip opens",
    },
    {
      prop: "disabled",
      type: "boolean",
      default: "false",
      description: "When true, disables opening the tooltip",
    },
    {
      prop: "contentClassName",
      type: "string",
      default: '""',
      description: "Additional CSS classes applied directly to the tooltip bubble popup",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      {/* Header */}
      <header className="space-y-2">
        <div className="flex items-center gap-3">
          <p
            className="text-4xl font-bold tracking-tight"
            style={{ color: "var(--text-color)" }}
          >
            Tooltip
          </p>
          <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300">
            Interactive
          </span>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          A customizable floating tooltip popup that displays contextual information when hovering or focusing on an element.
        </p>
      </header>

      {/* Basic Positions Demo */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold">Positioning</h2>
          <p className="text-sm text-gray-500 mt-1">
            Tooltips can be positioned on the top, bottom, left, or right of the trigger element.
          </p>
        </div>
        <ComponentDemo code={basicUsageCode}>
          <div className="flex flex-wrap items-center justify-center gap-6 py-6">
            <Tooltip content="Tooltip on Top" position="top">
              <Button variant="primary" size="sm">
                Top
              </Button>
            </Tooltip>

            <Tooltip content="Tooltip on Bottom" position="bottom">
              <Button variant="secondary" size="sm">
                Bottom
              </Button>
            </Tooltip>

            <Tooltip content="Tooltip on Left" position="left">
              <Button variant="outline" size="sm">
                Left
              </Button>
            </Tooltip>

            <Tooltip content="Tooltip on Right" position="right">
              <Button variant="dark" size="sm">
                Right
              </Button>
            </Tooltip>
          </div>
        </ComponentDemo>
      </section>

      {/* Visual Variants Demo */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold">Variants & Themes</h2>
          <p className="text-sm text-gray-500 mt-1">
            Choose from multiple aesthetic styles to match your design system.
          </p>
        </div>
        <ComponentDemo code={variantsCode}>
          <div className="flex flex-wrap items-center justify-center gap-4 py-6">
            <Tooltip content="Dark theme tooltip" variant="dark">
              <Button variant="dark" size="sm">
                Dark
              </Button>
            </Tooltip>

            <Tooltip content="Light theme tooltip" variant="light">
              <Button variant="outline" size="sm">
                Light
              </Button>
            </Tooltip>

            <Tooltip content="Primary colored tooltip" variant="primary">
              <Button variant="primary" size="sm">
                Primary
              </Button>
            </Tooltip>

            <Tooltip content="Frosted glass tooltip" variant="glass">
              <Button variant="secondary" size="sm">
                Glass
              </Button>
            </Tooltip>

            <Tooltip content="Outlined border tooltip" variant="outline">
              <Button variant="ghost" size="sm">
                Outline
              </Button>
            </Tooltip>
          </div>
        </ComponentDemo>
      </section>

      {/* Rich Content & Icon Triggers */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold">Rich Content & Icon Buttons</h2>
          <p className="text-sm text-gray-500 mt-1">
            Tooltips can wrap any icon or component and display custom JSX content with icons and descriptions.
          </p>
        </div>
        <ComponentDemo code={richContentCode}>
          <div className="flex flex-wrap items-center justify-center gap-8 py-6">
            <Tooltip
              position="top"
              variant="dark"
              content={
                <div className="flex items-center gap-2 p-1">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                  <div className="text-left">
                    <p className="font-semibold text-xs text-white">AI Assistant</p>
                    <p className="text-[11px] text-gray-300">Generate intelligent insights</p>
                  </div>
                </div>
              }
            >
              <Button variant="primary" size="sm" className="gap-2">
                <Sparkles className="w-4 h-4" /> AI Feature
              </Button>
            </Tooltip>

            <Tooltip content="Add to Favorites" position="bottom" variant="primary">
              <button className="p-3 rounded-full bg-pink-50 hover:bg-pink-100 text-pink-600 transition shadow-sm">
                <Heart className="w-5 h-5 fill-current" />
              </button>
            </Tooltip>

            <Tooltip content="System Notifications" position="top" variant="dark">
              <button className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 transition shadow-sm">
                <Bell className="w-5 h-5" />
              </button>
            </Tooltip>

            <Tooltip content="Share with your team" position="top" variant="glass">
              <button className="p-3 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 transition shadow-sm">
                <Share2 className="w-5 h-5" />
              </button>
            </Tooltip>

            <Tooltip
              content={copied ? "Copied to clipboard!" : "Click to copy code"}
              position="top"
              variant={copied ? "primary" : "dark"}
            >
              <button
                onClick={handleCopy}
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition shadow-sm"
              >
                <Copy className="w-5 h-5" />
              </button>
            </Tooltip>
          </div>
        </ComponentDemo>
      </section>

      {/* Animation Effects */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold">Animation Effects</h2>
          <p className="text-sm text-gray-500 mt-1">
            Multiple smooth entrance animation transitions powered by GSAP.
          </p>
        </div>
        <ComponentDemo
          code={`<Tooltip content="Scale entrance" animation="scaleIn">
  <Button variant="primary">Scale In</Button>
</Tooltip>

<Tooltip content="Fade entrance" animation="fadeIn">
  <Button variant="secondary">Fade In</Button>
</Tooltip>

<Tooltip content="Slide motion" animation="slide">
  <Button variant="outline">Slide</Button>
</Tooltip>

<Tooltip content="Elastic bounce" animation="bounce">
  <Button variant="dark">Bounce</Button>
</Tooltip>`}
        >
          <div className="flex flex-wrap items-center justify-center gap-4 py-6">
            <Tooltip content="Scale In animation" animation="scaleIn" position="top">
              <Button variant="primary" size="sm">
                scaleIn
              </Button>
            </Tooltip>

            <Tooltip content="Fade In animation" animation="fadeIn" position="top">
              <Button variant="secondary" size="sm">
                fadeIn
              </Button>
            </Tooltip>

            <Tooltip content="Slide In animation" animation="slide" position="top">
              <Button variant="outline" size="sm">
                slide
              </Button>
            </Tooltip>

            <Tooltip content="Bounce spring animation" animation="bounce" position="top">
              <Button variant="dark" size="sm">
                bounce
              </Button>
            </Tooltip>
          </div>
        </ComponentDemo>
      </section>

      {/* API Reference */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default TooltipPage;
