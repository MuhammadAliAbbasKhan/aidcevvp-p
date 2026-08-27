import React, { useRef, useEffect, useState } from 'react';
import { Sliders, Cpu, Droplets, Zap, Shield, Play, Pause, RefreshCw, BarChart2 } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export function AIDCEVVPPControlCanvas() {
  const canvasRef = useRef(null);
  const [gpuLoadMw, setGpuLoadMw] = useState(25);
  const [coolantFlow, setCoolantFlow] = useState(450);
  const [vppDischargeKw, setVppDischargeKw] = useState(2800);
  const [autonomousMode, setAutonomousMode] = useState(true);
  const [pueOptimizer, setPueOptimizer] = useState(true);
  const [vppPeakShaving, setVppPeakShaving] = useState(true);
  const [isRunning, setIsRunning] = useState(true);

  // Computed live metrics
  const pueValue = (1.04 + (gpuLoadMw / 200) - (coolantFlow / 5000) - (vppDischargeKw / 50000)).toFixed(2);
  const gpuTempAvg = Math.round(48 + (gpuLoadMw * 0.4) - (coolantFlow * 0.03));
  const tokensPerWatt = Math.round(850 + (coolantFlow * 0.8) - (pueValue * 200));
  const costSavingsPercent = Math.round(18 + (vppDischargeKw / 200) + (pueOptimizer ? 8 : 0));

  const { addToast } = useToast();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let tick = 0;

    const render = () => {
      tick++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background cleanroom grid
      ctx.fillStyle = '#060A12';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Grid lines
      ctx.strokeStyle = '#0F172A';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Title & Canvas Banner
      ctx.fillStyle = '#94A3B8';
      ctx.font = '12px Montserrat, sans-serif';
      ctx.fillText('AIDC MODULAR COMPUTE BAY & EV VPP POWER MATRIX', 20, 28);

      // 1. Modular AIDC Rack Cluster 1 (Left Bay)
      const rackWidth = 140;
      const rackHeight = 220;
      const rackX1 = 50;
      const rackY = 60;

      // Rack 1 Container
      ctx.fillStyle = '#0F172A';
      ctx.strokeStyle = '#1E293B';
      ctx.lineWidth = 2;
      ctx.fillRect(rackX1, rackY, rackWidth, rackHeight);
      ctx.strokeRect(rackX1, rackY, rackWidth, rackHeight);

      ctx.fillStyle = '#00C4EE';
      ctx.font = 'bold 12px Montserrat, sans-serif';
      ctx.fillText('MODULAR AIDC 1', rackX1 + 10, rackY + 22);

      // GPU Blade Servers Thermal Heatmap
      const numBlades = 6;
      const bladeH = 24;
      for (let i = 0; i < numBlades; i++) {
        const bladeY = rackY + 35 + i * 28;
        const heatRatio = Math.min(1, (gpuTempAvg - 40) / 45);
        const red = Math.round(255 * heatRatio);
        const green = Math.round(180 * (1 - heatRatio));
        const blue = Math.round(238 * (1 - heatRatio));

        ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, 0.25)`;
        ctx.fillRect(rackX1 + 10, bladeY, rackWidth - 20, bladeH);
        ctx.strokeStyle = `rgb(${red}, ${green}, ${blue})`;
        ctx.strokeRect(rackX1 + 10, bladeY, rackWidth - 20, bladeH);

        // Server LED blinking
        const blink = Math.sin(tick * 0.1 + i) > 0;
        ctx.fillStyle = blink ? '#10B981' : '#047857';
        ctx.beginPath();
        ctx.arc(rackX1 + 20, bladeY + 12, 3, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#E2E8F0';
        ctx.font = '10px Montserrat';
        ctx.fillText(`GPU Blade ${i+1}: ${gpuTempAvg + (i%3)}°C`, rackX1 + 30, bladeY + 16);
      }

      // 2. Rack Cluster 2 (Middle Bay)
      const rackX2 = 230;
      ctx.fillStyle = '#0F172A';
      ctx.fillRect(rackX2, rackY, rackWidth, rackHeight);
      ctx.strokeRect(rackX2, rackY, rackWidth, rackHeight);

      ctx.fillStyle = '#00C4EE';
      ctx.font = 'bold 12px Montserrat, sans-serif';
      ctx.fillText('MODULAR AIDC 2', rackX2 + 10, rackY + 22);

      for (let i = 0; i < numBlades; i++) {
        const bladeY = rackY + 35 + i * 28;
        ctx.fillStyle = 'rgba(0, 196, 238, 0.2)';
        ctx.fillRect(rackX2 + 10, bladeY, rackWidth - 20, bladeH);
        ctx.strokeStyle = '#00C4EE';
        ctx.strokeRect(rackX2 + 10, bladeY, rackWidth - 20, bladeH);

        ctx.fillStyle = '#10B981';
        ctx.beginPath();
        ctx.arc(rackX2 + 20, bladeY + 12, 3, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#E2E8F0';
        ctx.font = '10px Montserrat';
        ctx.fillText(`CDU Liquid ${coolantFlow}L`, rackX2 + 30, bladeY + 16);
      }

      // 3. EV VPP Energy Storage Matrix (Right Bay)
      const vppX = 410;
      const vppW = 160;
      ctx.fillStyle = '#0A1324';
      ctx.strokeStyle = '#FFD100';
      ctx.lineWidth = 2;
      ctx.fillRect(vppX, rackY, vppW, rackHeight);
      ctx.strokeRect(vppX, rackY, vppW, rackHeight);

      ctx.fillStyle = '#FFD100';
      ctx.font = 'bold 12px Montserrat, sans-serif';
      ctx.fillText('EV VPP BATTERY GRID', vppX + 10, rackY + 22);

      // Battery Cell Bar Animation
      const battLevel = Math.min(100, Math.max(20, (vppDischargeKw / 5000) * 100));
      ctx.fillStyle = '#1E293B';
      ctx.fillRect(vppX + 15, rackY + 40, vppW - 30, 120);
      ctx.fillStyle = '#FFD100';
      const fillH = (120 * battLevel) / 100;
      ctx.fillRect(vppX + 15, rackY + 40 + (120 - fillH), vppW - 30, fillH);

      ctx.fillStyle = '#000000';
      ctx.font = 'bold 14px Montserrat';
      ctx.fillText(`${vppDischargeKw} kW`, vppX + 40, rackY + 100);

      ctx.fillStyle = '#94A3B8';
      ctx.font = '10px Montserrat';
      ctx.fillText(`Grid Peak Shaving: ${vppPeakShaving ? 'ACTIVE' : 'OFF'}`, vppX + 15, rackY + 185);

      // 4. Liquid Cooling Flow Pipes (Animated Coolant Particles)
      ctx.strokeStyle = '#00C4EE';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(rackX1 + rackWidth, rackY + 140);
      ctx.lineTo(rackX2, rackY + 140);
      ctx.stroke();

      ctx.strokeStyle = '#FFD100';
      ctx.beginPath();
      ctx.moveTo(rackX2 + rackWidth, rackY + 140);
      ctx.lineTo(vppX, rackY + 140);
      ctx.stroke();

      // Flowing particles
      const particleOffset = (tick * (coolantFlow / 80)) % 140;
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(rackX1 + rackWidth + (particleOffset % 140), rackY + 140, 4, 0, Math.PI * 2);
      ctx.fill();

      // Telemetry Summary Card Overlay inside Canvas
      ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
      ctx.fillRect(20, canvas.height - 70, canvas.width - 40, 50);
      ctx.strokeStyle = '#334155';
      ctx.strokeRect(20, canvas.height - 70, canvas.width - 40, 50);

      ctx.fillStyle = '#10B981';
      ctx.font = 'bold 13px Montserrat';
      ctx.fillText(`PUE: ${pueValue}`, 40, canvas.height - 40);

      ctx.fillStyle = '#00C4EE';
      ctx.fillText(`GPU Temp: ${gpuTempAvg}°C`, 140, canvas.height - 40);

      ctx.fillStyle = '#FFD100';
      ctx.fillText(`VPP Discharge: ${vppDischargeKw} kW`, 280, canvas.height - 40);

      ctx.fillStyle = '#F43F5E';
      ctx.fillText(`Efficiency: +${costSavingsPercent}%`, 460, canvas.height - 40);

      if (isRunning) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [gpuLoadMw, coolantFlow, vppDischargeKw, isRunning, pueOptimizer, vppPeakShaving]);

  const handleApplyPolicy = () => {
    addToast(`AI Control Policy Updated: ${gpuLoadMw}MW Compute, ${coolantFlow}L Liquid Flow, ${vppDischargeKw}kW VPP Shaving applied!`, 'success');
  };

  return (
    <div style={{
      backgroundColor: '#090D14',
      border: '1px solid #1E293B',
      borderRadius: '20px',
      padding: '24px',
      boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      {/* Simulator Top Callout Banner */}
      <div style={{
        backgroundColor: '#0F172A',
        border: '1px solid #00C4EE',
        borderRadius: '12px',
        padding: '12px 20px',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Zap size={20} color="#00C4EE" />
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#E2E8F0' }}>
            AIDCEVVPP 2D Telemetry Simulator is 100% Free for Evaluation!
          </span>
        </div>
        <span style={{ fontSize: '12px', color: '#10B981', fontWeight: 700, backgroundColor: 'rgba(16, 185, 129, 0.1)', padding: '4px 10px', borderRadius: '20px' }}>
          ● LIVE AUTONOMOUS AGENT MONITORING
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>

        {/* Left: 2D Interactive Canvas */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ position: 'relative', width: '100%', overflow: 'hidden', borderRadius: '12px', border: '1px solid #1E293B' }}>
            <canvas
              ref={canvasRef}
              width={600}
              height={360}
              style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#060A12' }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button
              onClick={() => setIsRunning(!isRunning)}
              style={{
                backgroundColor: isRunning ? '#1E293B' : '#00C4EE',
                color: isRunning ? '#CBD5E1' : '#000000',
                border: 'none',
                borderRadius: '8px',
                padding: '8px 16px',
                fontWeight: 700,
                fontSize: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer'
              }}
            >
              {isRunning ? <Pause size={14} /> : <Play size={14} />}
              {isRunning ? 'Pause Animation' : 'Resume Telemetry'}
            </button>

            <button
              onClick={handleApplyPolicy}
              style={{
                backgroundColor: '#00C4EE',
                color: '#000000',
                border: 'none',
                borderRadius: '8px',
                padding: '8px 18px',
                fontWeight: 700,
                fontSize: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
                boxShadow: '0 0 12px rgba(0, 196, 238, 0.4)'
              }}
            >
              <RefreshCw size={14} />
              SYNC AI POLICY TO AGENTS
            </button>
          </div>
        </div>

        {/* Right: Controls & Interactive Sliders */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sliders size={20} color="#00C4EE" />
            AI Factory Telemetry Sliders
          </h3>

          {/* Slider 1: GPU Load */}
          <div style={{ backgroundColor: '#0F172A', padding: '16px', borderRadius: '12px', border: '1px solid #1E293B' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Cpu size={14} color="#00C4EE" /> GPU Power Load
              </span>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#00C4EE' }}>{gpuLoadMw} MW</span>
            </div>
            <input
              type="range"
              min="1"
              max="100"
              value={gpuLoadMw}
              onChange={(e) => setGpuLoadMw(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#00C4EE', cursor: 'pointer' }}
            />
          </div>

          {/* Slider 2: Liquid Coolant Flow */}
          <div style={{ backgroundColor: '#0F172A', padding: '16px', borderRadius: '12px', border: '1px solid #1E293B' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Droplets size={14} color="#10B981" /> CDU Coolant Flow
              </span>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#10B981' }}>{coolantFlow} L/min</span>
            </div>
            <input
              type="range"
              min="100"
              max="1000"
              value={coolantFlow}
              onChange={(e) => setCoolantFlow(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#10B981', cursor: 'pointer' }}
            />
          </div>

          {/* Slider 3: EV VPP Storage Discharge */}
          <div style={{ backgroundColor: '#0F172A', padding: '16px', borderRadius: '12px', border: '1px solid #1E293B' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Zap size={14} color="#FFD100" /> EV VPP Peak Shaving
              </span>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#FFD100' }}>{vppDischargeKw} kW</span>
            </div>
            <input
              type="range"
              min="500"
              max="5000"
              value={vppDischargeKw}
              onChange={(e) => setVppDischargeKw(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#FFD100', cursor: 'pointer' }}
            />
          </div>

          {/* Autonomous Toggles */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <label style={{
              backgroundColor: '#0F172A',
              border: `1px solid ${pueOptimizer ? '#00C4EE' : '#1E293B'}`,
              borderRadius: '10px',
              padding: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              fontSize: '12px',
              fontWeight: 600
            }}>
              <input
                type="checkbox"
                checked={pueOptimizer}
                onChange={(e) => setPueOptimizer(e.target.checked)}
                style={{ accentColor: '#00C4EE' }}
              />
              PUE AI Optimizer Engine
            </label>

            <label style={{
              backgroundColor: '#0F172A',
              border: `1px solid ${vppPeakShaving ? '#FFD100' : '#1E293B'}`,
              borderRadius: '10px',
              padding: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              fontSize: '12px',
              fontWeight: 600
            }}>
              <input
                type="checkbox"
                checked={vppPeakShaving}
                onChange={(e) => setVppPeakShaving(e.target.checked)}
                style={{ accentColor: '#FFD100' }}
              />
              EV Virtual Power Plant
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIDCEVVPPControlCanvas;

