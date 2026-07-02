'use client';
export default function Home(){
  return <div style={{background:'#0f0f0f',color:'#fff',minHeight:'100vh',padding:'40px',textAlign:'center'}}>
    <h1 style={{fontSize:'48px',marginBottom:'20px',color:'#4ade80'}}>Shivanchal</h1>
    <p style={{marginBottom:'40px'}}>5 AI Apps Platform</p>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'20px'}}>
      <AppCard href="https://triage.shivanchal.in" title="Triage Engine" color="#4ade80"/>
      <AppCard href="https://contracts.shivanchal.in" title="FinePrint" color="#60a5fa"/>
      <AppCard href="https://bids.shivanchal.in" title="Bidsight" color="#f59e0b"/>
      <AppCard href="https://dashboard.shivanchal.in" title="Dashboard" color="#ec4899"/>
    </div>
  </div>;
}
function AppCard({href,title,color}){return <a href={href} style={{padding:'20px',background:'#1a1a1a',border:`2px solid ${color}`,borderRadius:'8px',textDecoration:'none',color:'#fff'}}><h3 style={{color}}>{title}</h3></a>;}
