document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('mainCard');
    const ctaBtn = document.getElementById('ctaBtn');
    const nextBtn = document.getElementById('nextBtn');
    const ideaTitle = document.getElementById('ideaTitle');

    // 100 encouraging sentences of hope
    const sentences = [
        "오늘도 당신의 하루가 평안하길 바랍니다.",
        "당신은 생각보다 훨씬 더 강한 사람입니다.",
        "지금 힘들다면, 그것은 당신이 성장하고 있다는 증거입니다.",
        "모든 폭풍은 결국 지나가고 맑은 하늘이 찾아옵니다.",
        "작은 걸음이라도 괜찮으니 천천히 나아가세요.",
        "당신이라는 존재 자체로 이미 충분히 가치 있습니다.",
        "힘들 땐 잠시 쉬어가도 괜찮습니다. 포기하지만 마세요.",
        "오늘 흘린 땀방울은 내일의 꽃으로 피어날 것입니다.",
        "당신은 세상에 하나뿐인 가장 소중한 존재입니다.",
        "어두운 밤이 지나면 반드시 밝은 아침이 찾아옵니다.",
        "당신의 꿈은 반드시 이루어질 것입니다.",
        "당신의 미소는 누군가에게 큰 힘이 됩니다.",
        "오늘도 정말 수고 많으셨습니다.",
        "내일은 오늘보다 더 좋은 날이 될 거예요.",
        "마음속의 희망의 불꽃을 꺼뜨리지 마세요.",
        "당신은 사랑받기 위해 태어난 사람입니다.",
        "어떤 어려움도 당신을 꺾을 수는 없습니다.",
        "실패는 더 나은 길을 찾기 위한 이정표입니다.",
        "당신의 가치는 남들의 평가로 결정되지 않습니다.",
        "가끔은 넘어져도 괜찮아요. 다시 일어날 힘이 있으니까요.",
        "오늘도 묵묵히 당신의 길을 가는 당신을 응원합니다.",
        "당신이 있어 이 세상은 조금 더 따뜻합니다.",
        "과거에 얽매이지 말고 오늘을 예쁘게 채워가세요.",
        "숨을 깊이 들이쉬고, 다시 한 번 힘을 내봐요.",
        "당신의 삶은 앞으로 더 아름답게 빛날 것입니다.",
        "기적은 포기하지 않는 사람에게 찾아옵니다.",
        "당신이 걷는 모든 길이 꽃길이 되기를.",
        "마음의 여유를 갖고 한 걸음 물러서서 바라보세요.",
        "당신은 충분히 잘해내고 있습니다.",
        "오늘 하루도 고생한 자신을 안아주세요.",
        "작은 희망이 모여 큰 기적을 이룹니다.",
        "당신의 용기 있는 도전을 응원합니다.",
        "마음속 깊은 곳에 있는 빛을 믿으세요.",
        "고통은 잠시 머물다 갈 손님일 뿐입니다.",
        "당신은 언제나 기댈 수 있는 든든한 나무와 같습니다.",
        "매일매일 조금씩 더 좋은 사람이 되어가고 있어요.",
        "당신의 앞날에 늘 행운이 가득하기를 바랍니다.",
        "힘든 시간은 지나고 행복한 시간이 올 차례입니다.",
        "자신만의 속도로 걸어가는 것이 가장 중요합니다.",
        "당신의 따뜻한 마음이 세상을 변화시킵니다.",
        "행복은 언제나 우리 곁에 숨어 있습니다.",
        "오늘도 한 걸음 성장한 자신을 칭찬해주세요.",
        "괜찮아요, 다 잘 될 거예요.",
        "당신이 원하는 미래는 이미 시작되었습니다.",
        "매 순간 최선을 다하는 당신이 아름답습니다.",
        "힘든 일이 있었다면, 그것은 좋은 일이 오기 위함입니다.",
        "당신의 밝은 미래를 의심하지 마세요.",
        "세상에서 가장 아름다운 꽃은 바로 당신입니다.",
        "당신의 존재는 누군가에게 살아갈 힘을 줍니다.",
        "오늘도 수고한 당신에게 위로의 한마디를 건넵니다.",
        "당신이 꿈꾸는 삶을 살아갈 자격이 충분합니다.",
        "한 걸음 내딛는 용기만으로도 충분히 위대합니다.",
        "어떤 비바람 속에서도 당신의 뿌리는 굳건합니다.",
        "오늘은 더 좋은 일이 일어날 멋진 날입니다.",
        "당신이 만드는 변화는 세상을 더 좋게 만듭니다.",
        "당신은 늘 최고의 선택을 해오고 있습니다.",
        "힘내라는 말보다 따뜻한 포옹을 전합니다.",
        "당신의 지친 마음을 위로해 줄 작은 안식처가 되기를.",
        "포기하지 않고 걷는 매 순간이 기적입니다.",
        "인생의 가장 아름다운 순간은 아직 오지 않았습니다.",
        "당신의 진심은 언제나 통할 것입니다.",
        "오늘도 당신의 웃음소리가 가득한 하루가 되길.",
        "괜찮습니다. 당신은 당신대로 아름답습니다.",
        "당신이 가고자 하는 길을 당당하게 걸어가세요.",
        "마음을 열고 세상의 따뜻함을 느껴보세요.",
        "지치고 힘들 때, 잠시 하늘을 바라보며 숨을 골라보세요.",
        "매일 새로운 기회가 당신을 기다리고 있습니다.",
        "당신이 노력한 시간은 절대로 헛되지 않습니다.",
        "오늘도 당신을 향해 미소 짓는 하루가 되기를.",
        "당신의 선한 영향력이 세상을 밝힙니다.",
        "할 수 있다고 믿는 순간, 이미 반은 이뤄진 것입니다.",
        "당신은 언제나 사랑과 평화가 가득한 사람입니다.",
        "삶의 고난은 당신을 더 단단하게 만들 뿐입니다.",
        "오늘도 힘차게 나아가는 당신의 발걸음을 축복합니다.",
        "당신의 내일은 오늘보다 훨씬 더 눈부실 것입니다.",
        "지금의 고민은 더 나은 내일을 만드는 과정입니다.",
        "당신은 세상 무엇보다도 가치 있고 귀한 사람입니다.",
        "따뜻한 차 한 잔처럼 편안한 하루가 되기를.",
        "당신의 진정한 아름다움은 내면에서 빛납니다.",
        "오늘도 묵묵히 버텨준 당신이 정말 고맙습니다.",
        "어떤 상황에서도 희망을 잃지 마세요.",
        "당신이 가는 길에 늘 따스한 햇살이 비추기를.",
        "생각하는 대로, 꿈꾸는 대로 이루어질 것입니다.",
        "당신이 흘린 눈물은 보석처럼 빛날 날이 올 것입니다.",
        "당신은 다른 사람의 기준에 맞출 필요가 없습니다.",
        "당신의 삶에 항상 긍정적인 에너지가 가득하기를.",
        "매일 조금씩 다가오는 행복을 반갑게 맞이하세요.",
        "당신의 열정과 의지를 진심으로 지지합니다.",
        "어떤 힘든 순간도 영원히 지속되지는 않습니다.",
        "당신은 매일 더 멋진 사람이 되어가고 있습니다.",
        "당신의 작은 배려가 누군가의 세상을 구합니다.",
        "오늘 하루도 평화롭고 행복하게 마무리하세요.",
        "당신이 걷는 길은 결코 외롭지 않습니다.",
        "당신은 사랑과 기쁨을 누릴 충분한 자격이 있습니다.",
        "내일에 대한 걱정은 내려두고, 오늘에 집중해봐요.",
        "당신의 끊임없는 도전에 큰 박수를 보냅니다.",
        "삶은 언제나 당신 편입니다. 용기를 가지세요.",
        "당신의 눈부신 내일을 마음 깊이 축하합니다.",
        "오늘도 포기하지 않고 버텨낸 당신이 자랑스럽습니다.",
        "당신의 모든 발걸음마다 기적과 축복이 늘 함께하기를."
    ];
    let currentIndex = 0;

    // 3D Tilt Effect
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element.
        const y = e.clientY - rect.top;  // y position within the element.
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calculate rotate degrees (max 8 degrees for a subtle effect)
        const rotateX = ((centerY - y) / centerY) * 8;
        const rotateY = ((x - centerX) / centerX) * 8;
        
        // Dynamic glare/gradient shift effect
        card.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        card.style.borderColor = `rgba(255, 255, 255, ${0.18 + Math.abs(rotateY) / 100})`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0px) rotateX(0deg) rotateY(0deg)';
        card.style.borderColor = 'rgba(255, 255, 255, 0.08)';
        card.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.6s ease';
    });

    card.addEventListener('mouseenter', () => {
        card.style.transition = 'none';
    });

    // Next Sentence Button Click
    nextBtn.addEventListener('click', (e) => {
        // Randomly pick a new sentence index without immediate duplication
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * sentences.length);
        } while (newIndex === currentIndex && sentences.length > 1);
        
        currentIndex = newIndex;
        
        // Fade & slide animation for title change
        ideaTitle.style.opacity = '0';
        ideaTitle.style.transform = 'translateY(-10px)';
        ideaTitle.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
        
        setTimeout(() => {
            ideaTitle.textContent = sentences[currentIndex];
            ideaTitle.style.opacity = '1';
            ideaTitle.style.transform = 'translateY(0)';
        }, 200);

        // Particle effect
        createParticles(e.clientX, e.clientY);
        
        // Subtle button push animation
        nextBtn.style.transform = 'scale(0.97)';
        setTimeout(() => {
            nextBtn.style.transform = '';
        }, 120);
    });

    // Particle Effect on CTA Button Click
    ctaBtn.addEventListener('click', (e) => {
        createParticles(e.clientX, e.clientY);
        
        // Subtle button push animation
        ctaBtn.style.transform = 'scale(0.97)';
        setTimeout(() => {
            ctaBtn.style.transform = '';
        }, 120);
    });

    function createParticles(x, y) {
        const colors = ['#3b82f6', '#8b5cf6', '#a78bfa', '#60a5fa', '#c084fc'];
        const particleCount = 24;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            document.body.appendChild(particle);
            
            // Random size between 4px and 10px
            const size = Math.random() * 6 + 4;
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.background = color;
            particle.style.borderRadius = '50%';
            particle.style.position = 'absolute';
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '999';
            particle.style.boxShadow = `0 0 10px ${color}`;
            
            // Random direction and velocity
            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * 6 + 4;
            const destinationX = Math.cos(angle) * velocity * 18;
            const destinationY = Math.sin(angle) * velocity * 18;
            
            // CSS Animation
            const animation = particle.animate([
                { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
                { transform: `translate(calc(-50% + ${destinationX}px), calc(-50% + ${destinationY}px)) scale(0)`, opacity: 0 }
            ], {
                duration: Math.random() * 500 + 450,
                easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
                fill: 'forwards'
            });
            
            animation.onfinish = () => {
                particle.remove();
            };
        }
    }
});
