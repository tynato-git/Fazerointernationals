const nodes = [{x:12,y:28,l:"Strategy"},{x:38,y:12,l:"Marketing"},{x:66,y:29,l:"Technology"},{x:83,y:12,l:"AI"},{x:42,y:64,l:"Sales"},{x:75,y:76,l:"Growth"}];
export function LineNetwork() { return <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
  <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
    <path d="M12 28 L38 12 L66 29 L83 12 M12 28 L42 64 L75 76 L83 12 M38 12 L42 64 L66 29 L75 76" className="network-path" />
    {nodes.map((n,i)=><g key={n.l}><circle cx={n.x} cy={n.y} r=".8" className="network-node" style={{animationDelay:`${i*.35}s`}}/><text x={n.x+1.8} y={n.y-.8} className="network-label">{n.l}</text></g>)}
    <circle r=".55" className="network-particle"><animateMotion dur="9s" repeatCount="indefinite" path="M12 28 L38 12 L66 29 L83 12" /></circle>
    <circle r=".45" className="network-particle"><animateMotion dur="12s" repeatCount="indefinite" path="M12 28 L42 64 L75 76" /></circle>
  </svg>
</div> }
