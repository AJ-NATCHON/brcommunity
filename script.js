const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwDg5yXdOGIfgk9KN3oCncp-mzIk7yPllvbKRHPYRS2-cs2aa0hhk2Ifzgb7TrLPOiQHA/exec";

const clubsJunior = [
    "คณิตศาสตร์เจ้าปัญหา (ครูลลิต/ครูมัญชุสร)", "The Power of Math (ครูกฤติยา)", "เกมคณิตฯ(อุปกรณ์) (ครูศาศวัต/ครูจันทร์จิรา)", "Math Art (ครูทฤฒมน)", "ชุมนุมสวดโอ้เอ้วิหารราย ม.ต้น (ครูยุวดี)", "ชุมนุมหนังสือทำมือ ม.ต้น (ครูภควรรษ)", "English Literature (ครูหทัยภัทร)", "Crossword ม.ต้น (ครูคณิน)", "Enjoy with You(tube) (ครูมินิมล)", "Chinese Music ม.ต้น (ครูจิรพร)", "Free style by science (ครูธนวิน)", "บอร์ดเกม/ROV (ครูวาณี)", "e-sport (ครูณัชชนม์/ครูศุภารัตน์)", "ชุมนุมส่งเสริมประชาธิปไตย ม.ต้น (ครูอาชวิน)", "ชมรมเปตอง (ครูธนภูมิ/ครูภัทรรัตน์)", "ชุมนุมเสน่ห์ปลายจวัก (ครูสลิลดา)", "ชุมนุมการ์ตูนแฟนด้อม (ครูจิตตราภรณ์/ครูธันยวีร์)", "ชุมนุมอัพเวลธรรม (ครูคุณานนท์)", "ฟังพอดแคสต์ (Podcast) (ครูโสรยา)", "Photography as Art (ครูวิวัฒน์)", "ชุมนุมโลกศิลปะหลากมิติ (ครูกฤษฎา)", "เฮฮา ภาษาดนตรี (ครูรุ่งโรจน์)", "นาฏศิลป์ ม.ต้น (ครูเอกชัย)", "กีฬาสากล ม.ต้น (ครูพิฑูร)", "ชุมนุมกีฬาบริดจ์ (ครูผดุงศักดิ์)", "ว่ายน้ำ (ครูวารินทร์)"
];

const clubsSenior = [
    "A - Level คณิตศาสตร์ (ครูนพกร)", "เกมคณิตฯ(อุปกรณ์) (ครูกรรณิกา/ครูนันทวัน)", "เกมคณิิตคิดไปเรื่อย (ครูนันทวัลย์/ครูธัชณวีย์)", "คณิตศาสตร์กับการลงทุน (ครูรุ่งโรจน์)", "ชุมนุม Drama & Film (ครูพิมพลอย/ครูธิติพงศ์)", "ชุมนุมมูเตลู (ครูณฐพรรณ/ครูนารท)", "ชุมนุมสวดโอ้เอ้วิหารราย ม.ปลาย (ครูสว่างจิต)", "ชุมนุมนักอ่านนิยาย Why (ครูลินดา)", "Creative French (ครูกานต์ชนก/ครูวรพล)", "Crossword (ครูธนิสร)", "Chinese Music ม.ปลาย (ครูลลิตา/ครูวิภาวี)", "เล่น เล่น เล่นในญี่ปุ่น (ครูพิมพ์พรรณ/ครูวิทยา)", "Japanese Home Cooking (ครูดารากันย์/ครูนิตยา)", "Let's vibe with Eng! (ครูอรวรรณ)", "ตะลุยคอม@พร้อมแข่ง (ครูเพชรรัตน์/ครูนพพร)", "e-sport (ครูสุทธิพงศ์)", "นักรีวิว(เวอร์) - B.R. Reviewer (ครูมะลิวัลย์/ครูสุพัตรา)", "สรรสร้างมิตรภาพด้วยบอร์ดเกม (ครูมัฆวัตว์/ครูพรพงศ์)", "ชุมนุม SMTE (ครูมินตรา)", "ชมรมเปตอง (ครูธนภูมิ/ครูภัทรรัตน์)", "ชุมนุมส่งเสริมประชาธิปไตย ม.ปลาย (ครูศิริรัตน์)", "ชุมนุมหนังเปิดโลก (ว่าที่ ร.ต.ปรเมธ/ครูจงกลกร)", "ชุมนุม 'เล่น' ให้เป็นคน (ครูธนพล/ครูตรัยรัตน์)", "ชุมนุมอัพเวลธรรม (ครูฉัตรมงคล)", "ชุมนุมชิงช้าสวรรค์ (ครูไพรัตน์)", "B.R. Beauty Club (ครูปาริชาติ/ครูณิชชภา)", "ดนตรีไทย (ครูสุริยพงษ์)", "การ์ตูนคุณน่ะทำ (ครูจุฑามาศ)", "นาฏศิลป์ ม.ปลาย (ครูทรงยศ)", "ชุมนุมกีฬาบริดจ์ (ครูผดุงศักดิ์)", "ชุมนุมกีฬาสากล ม.ปลาย (ครูธวัชชัย)", "ชุมนุมแนะแนว (ครูวัสสิกา)", "ชุมนุมลองเล่า (ครูจุฑารัตน์)"
];

function handleLogin() {
    const email = document.getElementById('login-email').value;
    const id = document.getElementById('login-id').value;
    if (email.endsWith('@br.ac.th') && id.length > 0) {
        document.getElementById('email').value = email;
        document.getElementById('studentId').value = id;
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('registration-section').style.display = 'block';
    } else {
        alert("กรุณาใช้อีเมล @br.ac.th และกรอกเลขประจำตัว");
    }
}

function selectLevel(level) {
    const classSelect = document.getElementById('classroom');
    const clubSelect = document.getElementById('club');
    const form = document.getElementById('enroll-form');
    
    // ตั้งค่าห้องเรียน
    classSelect.innerHTML = '<option value="">เลือกห้องเรียน</option>';
    const startGrade = level === 'junior' ? 1 : 4;
    for (let g = startGrade; g <= startGrade + 2; g++) {
        for (let r = 1; r <= 9; r++) {
            let opt = document.createElement('option');
            opt.value = `${g}/${r}`; opt.text = `${g}/${r}`;
            classSelect.add(opt);
        }
    }

    // ตั้งค่าชุมนุม
    clubSelect.innerHTML = '<option value="">-- กรุณาเลือกชุมนุม --</option>';
    const clubs = level === 'junior' ? clubsJunior : clubsSenior;
    clubs.forEach(c => {
        let opt = document.createElement('option');
        opt.value = c; opt.text = c;
        clubSelect.add(opt);
    });

    form.style.display = 'block';
    document.querySelectorAll('.btn-level').forEach(b => b.classList.remove('active'));
    document.getElementById(`btn-${level}`).classList.add('active');
}

async function handleSubmit(e) {
    e.preventDefault();
    const btn = document.getElementById('submit-btn');
    btn.disabled = true;
    btn.innerText = "กำลังบันทึก...";

    const formData = {
        name: document.getElementById('name').value,
        studentId: document.getElementById('studentId').value,
        email: document.getElementById('email').value,
        classroom: document.getElementById('classroom').value,
        no: document.getElementById('no').value,
        club: document.getElementById('club').value
    }

    try {
        // ✅ ลบ mode: 'no-cors' ออก และใช้ cors แทน
        const res = await fetch(SCRIPT_URL, {
            method: 'POST',
            body: JSON.stringify(formData)
        });
        const result = await res.json();

        if (result.status === "success") {
            document.getElementById('enroll-form').style.display = 'none';
            document.getElementById('registration-section').innerHTML += `
                <div style="text-align:center; padding:30px;">
                    <h2 style="color:green;">✅ ลงทะเบียนสำเร็จ!</h2>
                    <p>ชุมนุม: <strong>${formData.club}</strong></p>
                </div>`;
        } else if (result.status === "full") {
            alert("❌ ชุมนุมนี้เต็มแล้ว กรุณาเลือกชุมนุมอื่น");
            btn.disabled = false;
            btn.innerText = "ยืนยันการลงทะเบียน";
        } else if (result.status === "duplicate") {
            alert("⚠️ คุณลงทะเบียนชุมนุมไปแล้ว ไม่สามารถลงซ้ำได้");
            btn.disabled = false;
            btn.innerText = "ยืนยันการลงทะเบียน";
        } else if (result.status === "closed") {
            alert("❌ " + result.message);
            btn.disabled = false;
            btn.innerText = "ยืนยันการลงทะเบียน";
        } else {
            alert("เกิดข้อผิดพลาด: " + result.message);
            btn.disabled = false;
            btn.innerText = "ยืนยันการลงทะเบียน";
        }
    } catch (err) {
        alert("เกิดข้อผิดพลาด กรุณาลองใหม่");
        btn.disabled = false;
        btn.innerText = "ยืนยันการลงทะเบียน";
    }
};
function logoutStudent() {
    // รีเซ็ต registration-section กลับเป็นของเดิม
    document.getElementById('registration-section').innerHTML = `
        <div style="text-align:right; margin-bottom:10px;">
            <button onclick="logoutStudent()" style="padding:8px 16px; background:#6c757d; color:white; border:none; border-radius:5px; cursor:pointer;">🚪 ออกจากระบบ</button>
        </div>
        <div class="level-selector">
            <button id="btn-junior" onclick="selectLevel('junior')" class="btn-level">มัธยมศึกษาตอนต้น</button>
            <button id="btn-senior" onclick="selectLevel('senior')" class="btn-level">มัธยมศึกษาตอนปลาย</button>
        </div>
        <form id="enroll-form" style="display:none;">
            <div class="form-grid">
                <input type="text" id="name" placeholder="ชื่อ-นามสกุล" required>
                <input type="text" id="studentId" placeholder="เลขประจำตัว" readonly>
                <input type="email" id="email" placeholder="อีเมล" readonly>
                <select id="classroom" required></select>
                <input type="number" id="no" placeholder="เลขที่" required>
                <select id="club" required>
                    <option value="">-- กรุณาเลือกชุมนุม --</option>
                </select>
            </div>
            <button type="submit" id="submit-btn" class="btn-main">ยืนยันการลงทะเบียน</button>
        </form>
    `;

    // ผูก event submit ใหม่
    document.getElementById('enroll-form').onsubmit = handleSubmit;

    // ซ่อน registration และแสดง login
    document.getElementById('registration-section').style.display = 'none';
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('login-email').value = '';
    document.getElementById('login-id').value = '';
}