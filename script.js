<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🎼 Pentagrama Interactivo - Solfeo Completo</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        
        body {
            background: #1a2634;
            font-family: 'Segoe UI', Arial, sans-serif;
            padding: 20px;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: #ecf0f1;
            border-radius: 30px;
            padding: 25px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.6);
        }
        
        h1 {
            color: #2c3e50;
            text-align: center;
            margin-bottom: 20px;
            font-size: 2.5rem;
        }
        
        /* Pentagrama */
        .staff-container {
            background: white;
            border-radius: 20px;
            padding: 20px;
            margin-bottom: 20px;
            overflow-x: auto;
            box-shadow: inset 0 0 10px #7f8c8d;
        }
        
        #staffCanvas {
            display: block;
            width: 1100px;
            height: 300px;
            background: #fff9f0;
            border-radius: 10px;
            cursor: crosshair;
            margin: 0 auto;
        }
        
        /* Selector de compás - BOTONES */
        .compass-section {
            background: #34495e;
            border-radius: 50px;
            padding: 15px 25px;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 15px;
            color: white;
        }
        
        .compass-title {
            font-size: 1.3rem;
            font-weight: bold;
            color: #f1c40f;
            margin-right: 10px;
        }
        
        .compass-buttons {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        
        .compass-btn {
            background: #2c3e50;
            color: white;
            border: 2px solid #7f8c8d;
            padding: 10px 20px;
            border-radius: 40px;
            font-size: 1.2rem;
            font-weight: bold;
            cursor: pointer;
            transition: 0.2s;
            min-width: 70px;
            text-align: center;
        }
        
        .compass-btn:hover {
            background: #e67e22;
            border-color: #f39c12;
        }
        
        .compass-btn.active {
            background: #e67e22;
            border-color: #f39c12;
            box-shadow: 0 0 15px #f39c12;
        }
        
        /* Paleta de herramientas */
        .palette-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
            margin-bottom: 20px;
        }
        
        .palette-section {
            background: #34495e;
            border-radius: 20px;
            padding: 15px;
            color: white;
        }
        
        .section-title {
            font-size: 1.2rem;
            font-weight: bold;
            color: #f1c40f;
            text-align: center;
            margin-bottom: 15px;
            border-bottom: 2px solid #f1c40f;
            padding-bottom: 5px;
        }
        
        .symbols {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
        }
        
        .symbol-btn {
            background: #2c3e50;
            border: 2px solid #7f8c8d;
            color: white;
            padding: 10px;
            border-radius: 15px;
            text-align: center;
            cursor: pointer;
            font-size: 1rem;
            transition: 0.2s;
        }
        
        .symbol-btn:hover {
            background: #e67e22;
            border-color: #f39c12;
        }
        
        .symbol-btn.active {
            background: #e67e22;
            border-color: #f39c12;
            box-shadow: 0 0 10px #f39c12;
        }
        
        .big-note {
            font-size: 2rem;
            display: block;
            margin-bottom: 5px;
        }
        
        /* Controles */
        .action-bar {
            display: flex;
            gap: 15px;
            margin: 20px 0;
            flex-wrap: wrap;
            justify-content: center;
        }
        
        .action-btn {
            background: #3498db;
            color: white;
            border: none;
            padding: 12px 30px;
            border-radius: 40px;
            font-size: 1.1rem;
            font-weight: bold;
            cursor: pointer;
            box-shadow: 0 4px 0 #216795;
            transition: 0.1s;
        }
        
        .action-btn.play {
            background: #27ae60;
            box-shadow: 0 4px 0 #1e8449;
        }
        
        .action-btn.clear {
            background: #e74c3c;
            box-shadow: 0 4px 0 #b03a2e;
        }
        
        /* Panel de información */
        .info-panel {
            background: #34495e;
            border-radius: 20px;
            padding: 20px;
            color: white;
            margin-top: 20px;
        }
        
        .note-indicator {
            background: #27ae60;
            padding: 15px;
            border-radius: 15px;
            font-size: 1.3rem;
            text-align: center;
            margin: 10px 0;
        }
        
        .compass-info {
            margin-top: 10px;
            color: #f1c40f;
            font-size: 1.1rem;
            text-align: center;
            padding: 10px;
            background: #2c3e50;
            border-radius: 30px;
        }
        
        .theory-text {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
            margin-top: 20px;
            text-align: center;
        }
        
        .theory-item {
            background: #2c3e50;
            padding: 10px;
            border-radius: 15px;
        }
        
        .status-bar {
            background: #2c3e50;
            color: white;
            padding: 15px 25px;
            border-radius: 40px;
            margin-top: 20px;
            text-align: center;
            font-size: 1.1rem;
        }
    </style>
</head>
<body>
<div class="container">
    <h1>🎼 PENTAGRAMA INTERACTIVO · Solfeo Completo</h1>
    
    <!-- PENTAGRAMA -->
    <div class="staff-container">
        <canvas id="staffCanvas" width="1100" height="300"></canvas>
    </div>
    
    <!-- SELECTOR DE COMPÁS CON BOTONES -->
    <div class="compass-section">
        <span class="compass-title">🎯 COMPÁS:</span>
        <div class="compass-buttons" id="compassButtons">
            <button class="compass-btn active" data-compass="4/4">4/4</button>
            <button class="compass-btn" data-compass="3/4">3/4</button>
            <button class="compass-btn" data-compass="2/4">2/4</button>
            <button class="compass-btn" data-compass="6/8">6/8</button>
            <button class="compass-btn" data-compass="9/8">9/8</button>
            <button class="compass-btn" data-compass="12/8">12/8</button>
            <button class="compass-btn" data-compass="2/2">2/2</button>
            <button class="compass-btn" data-compass="3/8">3/8</button>
            <button class="compass-btn" data-compass="5/4">5/4</button>
            <button class="compass-btn" data-compass="7/4">7/4</button>
        </div>
    </div>
    
    <!-- PALETA DE SÍMBOLOS -->
    <div class="palette-grid">
        <!-- Figuras -->
        <div class="palette-section">
            <div class="section-title">🎵 Figuras</div>
            <div class="symbols">
                <div class="symbol-btn active" data-type="negra"><span class="big-note">𝅘𝅥</span> Negra</div>
                <div class="symbol-btn" data-type="blanca"><span class="big-note">𝅗𝅥</span> Blanca</div>
                <div class="symbol-btn" data-type="redonda"><span class="big-note">𝅝</span> Redonda</div>
                <div class="symbol-btn" data-type="corchea"><span class="big-note">♪</span> Corchea</div>
                <div class="symbol-btn" data-type="semicorchea"><span class="big-note">♬</span> Semicorchea</div>
                <div class="symbol-btn" data-type="fusa"><span class="big-note">𝅘𝅥𝅯</span> Fusa</div>
            </div>
        </div>
        
        <!-- Silencios -->
        <div class="palette-section">
            <div class="section-title">⏸️ Silencios</div>
            <div class="symbols">
                <div class="symbol-btn" data-type="silRedonda"><span class="big-note">𝄽</span> Redonda</div>
                <div class="symbol-btn" data-type="silBlanca"><span class="big-note">𝄾</span> Blanca</div>
                <div class="symbol-btn" data-type="silNegra"><span class="big-note">𝄿</span> Negra</div>
                <div class="symbol-btn" data-type="silCorchea"><span class="big-note">𝅀</span> Corchea</div>
                <div class="symbol-btn" data-type="silSemi"><span class="big-note">𝅁</span> Semicorchea</div>
            </div>
        </div>
        
        <!-- Expresión -->
        <div class="palette-section">
            <div class="section-title">🎨 Expresión</div>
            <div class="symbols">
                <div class="symbol-btn" data-type="piano">𝆏 piano</div>
                <div class="symbol-btn" data-type="forte">𝆑 forte</div>
                <div class="symbol-btn" data-type="cresc">cresc.</div>
                <div class="symbol-btn" data-type="dim">dim.</div>
                <div class="symbol-btn" data-type="staccato">⏺ stacc.</div>
                <div class="symbol-btn" data-type="acento">▶ acento</div>
            </div>
        </div>
        
        <!-- Alteraciones -->
        <div class="palette-section">
            <div class="section-title">#️⃣ Alteraciones</div>
            <div class="symbols">
                <div class="symbol-btn" data-type="sostenido"><span class="big-note">♯</span> Sostenido</div>
                <div class="symbol-btn" data-type="bemol"><span class="big-note">♭</span> Bemol</div>
                <div class="symbol-btn" data-type="becuadro"><span class="big-note">♮</span> Becuadro</div>
            </div>
        </div>
    </div>
    
    <!-- BARRA DE ACCIONES -->
    <div class="action-bar">
        <button class="action-btn play" id="playBtn">▶ Reproducir melodía</button>
        <button class="action-btn" id="metronomeBtn">🎧 Metrónomo 120 BPM</button>
        <button class="action-btn clear" id="clearBtn">🗑 Limpiar todo</button>
    </div>
    
    <!-- PANEL DE INFORMACIÓN -->
    <div class="info-panel">
        <div class="note-indicator" id="noteDisplay">
            👆 Haz clic en el pentagrama para colocar notas
        </div>
        
        <div class="compass-info" id="compassInfo">
            Compás actual: 4/4 (4 tiempos, negra = 1 tiempo)
        </div>
        
        <div class="theory-text">
            <div class="theory-item">𝅝 Redonda = 4 tiempos</div>
            <div class="theory-item">𝅗𝅥 Blanca = 2 tiempos</div>
            <div class="theory-item">𝅘𝅥 Negra = 1 tiempo</div>
            <div class="theory-item">♪ Corchea = 1/2 tiempo</div>
            <div class="theory-item">♬ Semicorchea = 1/4 tiempo</div>
            <div class="theory-item">𝅘𝅥𝅯 Fusa = 1/8 tiempo</div>
        </div>
    </div>
    
    <!-- BARRA DE ESTADO -->
    <div class="status-bar" id="statusBar">
        ⚡ Listo. Selecciona un símbolo y haz clic en el pentagrama.
    </div>
</div>

<script>
    // Configuración
    const canvas = document.getElementById('staffCanvas');
    const ctx = canvas.getContext('2d');
    
    // Datos
    let elementos = [];
    let tipoActual = 'negra';
    let compassActual = '4/4';
    
    // Posiciones de notas (Y)
    const notasPos = {
        'Do4': 220, 'Re4': 208, 'Mi4': 196, 'Fa4': 184, 'Sol4': 172,
        'La4': 160, 'Si4': 148, 'Do5': 136, 'Re5': 124, 'Mi5': 112,
        'Fa5': 100, 'Sol5': 88, 'La5': 76, 'Si5': 64, 'Do6': 52
    };
    
    // ================================================
    // DIBUJAR PENTAGRAMA
    // ================================================
    function dibujarPentagrama() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Fondo
        ctx.fillStyle = '#fff9f0';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Líneas del pentagrama
        ctx.strokeStyle = '#2c3e50';
        ctx.lineWidth = 2;
        for (let i = 0; i < 5; i++) {
            let y = 100 + i * 24;
            ctx.beginPath();
            ctx.moveTo(50, y);
            ctx.lineTo(1050, y);
            ctx.stroke();
        }
        
        // Clave de sol
        ctx.font = 'bold 80px "Times New Roman", serif';
        ctx.fillStyle = '#2c3e50';
        ctx.fillText('𝄞', 30, 160);
        
        // COMPÁS - se actualiza con los botones
        ctx.font = 'bold 32px Arial';
        ctx.fillStyle = '#e67e22';
        let compassText = compassActual;
        if (compassActual === '2/2') compassText = '𝄴';
        ctx.fillText(compassText, 140, 70);
        
        // Líneas adicionales
        ctx.strokeStyle = '#bdc3c7';
        ctx.lineWidth = 1;
        for (let i = 1; i <= 3; i++) {
            ctx.beginPath();
            ctx.moveTo(50, 100 - i * 12);
            ctx.lineTo(1050, 100 - i * 12);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.moveTo(50, 196 + i * 12);
            ctx.lineTo(1050, 196 + i * 12);
            ctx.stroke();
        }
        
        // Dibujar elementos guardados
        elementos.forEach(elem => {
            if (elem.tipo.includes('sil')) {
                // Silencios
                ctx.font = '60px "Times New Roman", serif';
                ctx.fillStyle = '#c0392b';
                let simb = '𝄽';
                if (elem.tipo === 'silBlanca') simb = '𝄾';
                if (elem.tipo === 'silNegra') simb = '𝄿';
                if (elem.tipo === 'silCorchea') simb = '𝅀';
                if (elem.tipo === 'silSemi') simb = '𝅁';
                ctx.fillText(simb, elem.x - 20, elem.y - 10);
            }
            else if (elem.tipo === 'piano' || elem.tipo === 'forte' || elem.tipo === 'cresc' || elem.tipo === 'dim') {
                ctx.font = 'bold 24px Arial';
                ctx.fillStyle = '#e67e22';
                ctx.fillText(elem.tipo, elem.x, elem.y);
            }
            else if (elem.tipo === 'staccato') {
                ctx.font = '30px Arial';
                ctx.fillStyle = '#27ae60';
                ctx.fillText('⏺', elem.x, elem.y);
            }
            else if (elem.tipo === 'acento') {
                ctx.font = '30px Arial';
                ctx.fillStyle = '#27ae60';
                ctx.fillText('▶', elem.x, elem.y);
            }
            else if (elem.tipo === 'sostenido' || elem.tipo === 'bemol' || elem.tipo === 'becuadro') {
                ctx.font = '40px "Times New Roman", serif';
                ctx.fillStyle = '#16a085';
                let simb = elem.tipo === 'sostenido' ? '♯' : (elem.tipo === 'bemol' ? '♭' : '♮');
                ctx.fillText(simb, elem.x, elem.y);
            }
            else {
                // Notas musicales
                ctx.fillStyle = '#2c3e50';
                ctx.beginPath();
                ctx.ellipse(elem.x, elem.y, 10, 12, 0, 0, Math.PI * 2);
                ctx.fill();
                
                if (elem.tipo !== 'redonda') {
                    ctx.beginPath();
                    ctx.moveTo(elem.x + 10, elem.y - 35);
                    ctx.lineTo(elem.x + 10, elem.y + 5);
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = '#2c3e50';
                    ctx.stroke();
                }
                
                // Corchetes
                if (elem.tipo === 'corchea' || elem.tipo === 'semicorchea' || elem.tipo === 'fusa') {
                    ctx.fillStyle = '#2c3e50';
                    
                    ctx.beginPath();
                    ctx.moveTo(elem.x + 10, elem.y - 35);
                    ctx.lineTo(elem.x + 25, elem.y - 30);
                    ctx.lineTo(elem.x + 10, elem.y - 25);
                    ctx.fill();
                    
                    if (elem.tipo === 'semicorchea' || elem.tipo === 'fusa') {
                        ctx.beginPath();
                        ctx.moveTo(elem.x + 10, elem.y - 25);
                        ctx.lineTo(elem.x + 25, elem.y - 20);
                        ctx.lineTo(elem.x + 10, elem.y - 15);
                        ctx.fill();
                        
                        if (elem.tipo === 'fusa') {
                            ctx.beginPath();
                            ctx.moveTo(elem.x + 10, elem.y - 15);
                            ctx.lineTo(elem.x + 25, elem.y - 10);
                            ctx.lineTo(elem.x + 10, elem.y - 5);
                            ctx.fill();
                        }
                    }
                }
                
                // Nombre de la nota
                ctx.font = 'bold 12px Arial';
                ctx.fillStyle = '#c0392b';
                ctx.fillText(elem.nota, elem.x - 15, elem.y - 45);
            }
        });
    }
    
    // ================================================
    // OBTENER NOTA POR Y
    // ================================================
    function getNotaDesdeY(y) {
        let notaCercana = 'Do4';
        let distMin = 100;
        for (let [nota, posY] of Object.entries(notasPos)) {
            let dist = Math.abs(y - posY);
            if (dist < distMin) {
                distMin = dist;
                notaCercana = nota;
            }
        }
        return notaCercana;
    }
    
    // ================================================
    // CLIC EN EL PENTAGRAMA
    // ================================================
    canvas.addEventListener('click', (e) => {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        
        const x = (e.clientX - rect.left) * scaleX;
        const y = (e.clientY - rect.top) * scaleY;
        
        if (x < 50 || x > 1050 || y < 40 || y > 260) return;
        
        const nota = getNotaDesdeY(y);
        
        elementos.push({
            x: x,
            y: y,
            tipo: tipoActual,
            nota: nota
        });
        
        dibujarPentagrama();
        document.getElementById('noteDisplay').innerHTML = `🎵 Nota colocada: ${nota} | Figura: ${tipoActual}`;
        actualizarEstado(`✓ Agregado: ${tipoActual} en ${nota}`);
    });
    
    // ================================================
    // SELECTOR DE SÍMBOLOS
    // ================================================
    document.querySelectorAll('.symbol-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.symbol-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            tipoActual = btn.dataset.type;
            actualizarEstado(`Símbolo seleccionado: ${tipoActual}`);
        });
    });
    
    // ================================================
    // SELECTOR DE COMPÁS (FUNCIONA)
    // ================================================
    document.querySelectorAll('.compass-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.compass-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            compassActual = btn.dataset.compass;
            
            dibujarPentagrama();
            
            let infoText = `Compás actual: ${compassActual}`;
            if (compassActual === '4/4') infoText += ' (4 tiempos, negra = 1 tiempo)';
            else if (compassActual === '3/4') infoText += ' (3 tiempos, negra = 1 tiempo)';
            else if (compassActual === '2/4') infoText += ' (2 tiempos, negra = 1 tiempo)';
            else if (compassActual === '6/8') infoText += ' (6 tiempos, corchea = 1 tiempo)';
            else if (compassActual === '9/8') infoText += ' (9 tiempos, corchea = 1 tiempo)';
            else if (compassActual === '12/8') infoText += ' (12 tiempos, corchea = 1 tiempo)';
            else if (compassActual === '2/2') infoText += ' (2 tiempos, blanca = 1 tiempo)';
            else if (compassActual === '3/8') infoText += ' (3 tiempos, corchea = 1 tiempo)';
            else infoText += ` (tiempo variable)`;
            
            document.getElementById('compassInfo').innerHTML = infoText;
            actualizarEstado(`Compás cambiado a ${compassActual}`);
        });
    });
    
    // ================================================
    // REPRODUCIR
    // ================================================
    document.getElementById('playBtn').addEventListener('click', () => {
        if (elementos.length === 0) {
            alert('Agrega algunas notas primero');
            return;
        }
        
        actualizarEstado('🎧 Reproduciendo...');
        
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const audioCtx = new AudioContext();
        
        const frecuencias = {
            'Do4': 261.63, 'Re4': 293.66, 'Mi4': 329.63, 'Fa4': 349.23,
            'Sol4': 392.00, 'La4': 440.00, 'Si4': 493.88,
            'Do5': 523.25, 'Re5': 587.33, 'Mi5': 659.25,
            'Fa5': 698.46, 'Sol5': 783.99, 'La5': 880.00, 'Si5': 987.77, 'Do6': 1046.50
        };
        
        const notas = elementos.filter(e => !e.tipo.includes('sil') && !e.tipo.includes('piano') && !e.tipo.includes('cresc') && !e.tipo.includes('sostenido'))
                               .sort((a, b) => a.x - b.x);
        
        let tiempo = audioCtx.currentTime;
        
        notas.forEach(elem => {
            const freq = frecuencias[elem.nota] || 440;
            let duracion = 0.5;
            if (elem.tipo === 'redonda') duracion = 2.0;
            if (elem.tipo === 'blanca') duracion = 1.0;
            if (elem.tipo === 'corchea') duracion = 0.25;
            if (elem.tipo === 'semicorchea') duracion = 0.125;
            if (elem.tipo === 'fusa') duracion = 0.0625;
            
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            
            osc.type = 'sine';
            osc.frequency.value = freq;
            
            gain.gain.setValueAtTime(0, tiempo);
            gain.gain.linearRampToValueAtTime(0.2, tiempo + 0.02);
            gain.gain.linearRampToValueAtTime(0, tiempo + duracion);
            
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            
            osc.start(tiempo);
            osc.stop(tiempo + duracion + 0.05);
            
            tiempo += duracion * 0.8;
        });
        
        setTimeout(() => actualizarEstado('✅ Reproducción completada'), (tiempo - audioCtx.currentTime) * 1000);
    });
    
    // ================================================
    // METRÓNOMO
    // ================================================
    document.getElementById('metronomeBtn').addEventListener('click', () => {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const audioCtx = new AudioContext();
        
        const bpm = 120;
        const interval = 60 / bpm;
        let tiempo = audioCtx.currentTime;
        
        for (let i = 0; i < 16; i++) {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            
            osc.frequency.value = i % 4 === 0 ? 880 : 440;
            
            gain.gain.setValueAtTime(0, tiempo);
            gain.gain.linearRampToValueAtTime(0.1, tiempo + 0.01);
            gain.gain.linearRampToValueAtTime(0, tiempo + 0.08);
            
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            
            osc.start(tiempo);
            osc.stop(tiempo + 0.08);
            
            tiempo += interval;
        }
        
        actualizarEstado('🎧 Metrónomo 120 BPM');
    });
    
    // ================================================
    // LIMPIAR
    // ================================================
    document.getElementById('clearBtn').addEventListener('click', () => {
        elementos = [];
        dibujarPentagrama();
        document.getElementById('noteDisplay').innerHTML = '👆 Haz clic en el pentagrama para colocar notas';
        actualizarEstado('🧹 Pentagrama limpiado');
    });
    
    // ================================================
    // MOUSEMOVE
    // ================================================
    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        const scaleY = canvas.height / rect.height;
        const y = (e.clientY - rect.top) * scaleY;
        
        if (y > 40 && y < 260) {
            const nota = getNotaDesdeY(y);
            document.getElementById('noteDisplay').innerHTML = `🎵 Posición: ${nota} | Símbolo activo: ${tipoActual}`;
        }
    });
    
    // ================================================
    // ACTUALIZAR ESTADO
    // ================================================
    function actualizarEstado(texto) {
        document.getElementById('statusBar').innerHTML = `⚡ ${texto}`;
    }
    
    // ================================================
    // INICIALIZAR
    // ================================================
    dibujarPentagrama();
    actualizarEstado('Bienvenido al pentagrama interactivo');
</script>
</body>
</html>