import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="My tech stack, tools, and favorite gear."
      intro="Here's a comprehensive list of the hardware and software I use daily for development, productivity, and creative work. These are the tools that have genuinely improved my workflow."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="14” MacBook Pro, M1 Max, 16GB RAM (2023)">
            Coming from an Intel Mac, I needed a laptop that could handle demanding 
            workflows—from development projects to video editing and streaming. The 
            upgrade has been transformative.
          </Tool>
          <Tool title="Samsung C49RG9x Ultrawide Monitor">
            A massive 49" ultrawide that gives you the screen real estate of two 
            monitors without the bezels. Perfect for multitasking across multiple 
            projects and applications.
          </Tool>
          <Tool title="Keychron Mechanical Keyboard">
            Responsive keys, minimal latency, and a compact layout that doesn't 
            sacrifice functionality. It's everything I need for productive coding 
            without the desk clutter.
          </Tool>
          <Tool title="Insta360 Link 2">
            4K webcam with AI tracking that keeps me centered during video calls. 
            The image quality is crisp, and the auto-framing means I can move around naturally.
          </Tool>
          <Tool title="Blue Yeti Mic">
            Crystal clear audio for podcasts, calls, and recordings. The multiple pickup patterns 
            make it versatile enough for any recording situation.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="VS Code">
            My primary code editor. With the right extensions, it handles everything 
            from web development to Python scripting. Fast, reliable, and constantly 
            improving.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Tella">
            Record, edit, and share videos all in one place. The streamlined workflow means 
            I can create professional-looking content in minutes instead of hours.
          </Tool>
        </ToolsSection>
        
      </div>
    </SimpleLayout>
  )
}
