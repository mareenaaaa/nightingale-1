
        document.addEventListener('DOMContentLoaded', () => {
            const grid = document.getElementById('home-packages-grid');
            const packageData = window.packageData;

            const images = {
                munnar: 'munnar.jfif',
                munnar_alleppey: 'alapuzha.jpg',
                honeymoon: 'Mararikualm beach.webp',
                south_india: 'madurai.jpg',
                mookambika: 'mookambika.jpg',
                nalambalam: 'thiruvanthapuram.jpg',
                hyderabad: 'hyderabad.jpg',
                mysore: 'mysore.jpg',
                ooty: 'ooty.jpg',
                kodaikanal: 'kodai.jpg',
                navagraha: 'image1.jpg',
                trivandrum: 'thiruvanthapuram.jpg',
                wayanad: 'alapuzha.jpg',
                guruvayoor: 'packages/PACKAGES/Guruvayoor/guruvayur-temple.jpg',
                kannur: 'packages/PACKAGES/Kannur Temple Visit/mridanga saileswari.jpg'
            };

            const descriptions = {
                munnar: 'Discover the sprawling tea plantations and mist-covered hills of Munnar.',
                munnar_alleppey: 'The perfect blend of mist-covered hills and serene backwater houseboats.',
                honeymoon: 'A romantic escapade featuring private pool villas and intimate beach dinners.',
                south_india: 'Explore the spiritual grandeur of Palani, Madurai, and Rameshwaram.',
                mookambika: 'A soul-enriching journey through the most sacred temples of Karnataka.',
                nalambalam: 'A sacred circuit visit to the four temples dedicated to the brothers of Lord Rama.',
                hyderabad: 'Explore Charminar, Golconda Fort, Ramoji Film City and Hyderabad culture.',
                mysore: 'Visit Mysore Palace, Brindavan Gardens and Bangalore city attractions.',
                ooty: 'Tea plantations, Ooty Lake, botanical gardens and hill station views.',
                kodaikanal: 'Kodai Lake, Coaker’s Walk, waterfalls and misty mountains.',
                navagraha: 'Explore the 9 sacred temples dedicated to the Navagrahas.',
                trivandrum: 'Experience the cultural bliss of Kerala\'s capital city and Kovalam beach.',
                wayanad: 'Explore the natural beauty of Wayanad with waterfalls, dams, and caves.',
                guruvayoor: 'A spiritual pilgrimage to the famous Guruvayoor Temple and Anakkotta.',
                kannur: 'Visit the revered temples and ancient shrines of Kannur district.'
            };

            const prices = {
                munnar: 'From ₹12,500',
                munnar_alleppey: 'From ₹18,900',
                honeymoon: 'From ₹25,000',
                south_india: 'From ₹14,000',
                mookambika: 'On Request',
                nalambalam: 'On Request',
                hyderabad: 'From ₹15,500',
                mysore: 'From ₹22,000',
                ooty: 'From ₹12,000',
                kodaikanal: 'From ₹14,500',
                navagraha: 'On Request',
                trivandrum: 'On Request',
                wayanad: 'On Request',
                guruvayoor: 'On Request',
                kannur: 'On Request'
            };

            const groupType = {
                munnar: '2+ Persons',
                munnar_alleppey: '2+ Persons',
                honeymoon: 'Couple',
                south_india: 'Family',
                mookambika: 'Group',
                nalambalam: 'Any',
                hyderabad: '2+ Persons',
                mysore: '2+ Persons',
                ooty: 'Family',
                kodaikanal: 'Couple',
                navagraha: 'Family',
                trivandrum: 'Family',
                wayanad: 'Family',
                guruvayoor: 'Any',
                kannur: 'Family'
            };

            function renderHomePackages() {
                if (!window.packageData || !grid) {
                    setTimeout(renderHomePackages, 100);
                    return;
                }
                let html = '';
                for (let id in packageData) {
                    const pkg = packageData[id];
                    let days = pkg.itinerary.length + ' Days';
                    if (id === 'mookambika') days = 'Customizable';
                    if (id === 'nalambalam' || id === 'guruvayoor') days = '1 Day';

                    let displayTitle = pkg.title.replace(/\([^)]*\)/g, '').trim();

                    html += `
                    
                    
                    <div class="package-card-lux" data-id="${id}" tabindex="0" aria-label="${displayTitle} Package">
                        <div class="package-media">
                            <img src="${images[id] || 'home.jpg'}" alt="${displayTitle} Cover">
                            <div class="package-price-tag">${prices[id] || 'On Request'}</div>
                        </div>
                        <div class="package-body">
                            <div class="package-meta">
                                <span><i class="far fa-calendar"></i> ${days}</span>
                                <span><i class="far fa-user"></i> ${groupType[id] || 'Custom'}</span>
                            </div>
                            <h3>${displayTitle}</h3>
                            <div class="package-rating" style="margin-bottom: 10px; color: #ffcc33; font-size: 0.9rem; font-weight: 700;">
                                <i class="fas fa-star"></i> 4.9 <span style="color: rgba(255,255,255,0.5); font-weight: 400; font-size: 0.8rem;">(124 Reviews)</span>
                            </div>
                            <p>${descriptions[id] || 'Experience an unforgettable journey.'}</p>
                            <div class="package-action">
                                <span class="view-itinerary-btn" tabindex="0" role="button" aria-expanded="false" style="color: #ffcc33; cursor: pointer; font-weight: 700;">
                                    Package Details <i class="fas fa-chevron-down"></i>
                                </span>
                            </div>
                            
                            <div class="package-details-inline">
                                <div class="pkg-amenities" style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.05);">
                                    <h4 style="margin-bottom: 10px; font-size: 1rem;">Included Amenities</h4>
                                    <div style="display: flex; gap: 15px; color: rgba(255,255,255,0.7); font-size: 0.85rem; flex-wrap: wrap;">
                                        <span><i class="fas fa-hotel"></i> 3+ Star Hotels</span>
                                        <span><i class="fas fa-utensils"></i> Breakfast Included</span>
                                        <span><i class="fas fa-car"></i> AC Cab Transfers</span>
                                        <span><i class="fas fa-map-marked-alt"></i> Local Sightseeing</span>
                                    </div>
                                </div>
                                
                                <h4 style="margin-bottom: 15px; font-size: 1rem; color: #ffcc33;">Itinerary Breakdown</h4>
                                <div class="itinerary-steps">
                                    ${pkg.itinerary.map(item => `
                                        <div class="itinerary-step">
                                            <div class="step-num">${item.day ? 'D' + item.day : '•'}</div>
                                            <div class="step-info">
                                                <h4>${item.day ? 'Day ' + item.day : 'Timeline'}</h4>
                                                <p>${item.content}</p>
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                                <div class="pkg-transport" style="margin-top: 20px; padding: 15px; background: rgba(0,0,0,0.2); border-radius: 10px; font-size: 0.85rem; color: rgba(255,255,255,0.6);">
                                    <strong>Transportation:</strong> Pickup and drop-off points are customizable upon booking.
                                </div>
                                <a href="https://wa.me/919847068334" class="modal-book-btn" tabindex="0" style="margin-top: 30px;">Book via WhatsApp</a>
                            </div>
                        </div>
                    </div>


                    `;
                }

                grid.innerHTML = html;

                grid.querySelectorAll('.package-card-lux').forEach(card => {
                    const btn = card.querySelector('.view-itinerary-btn');

                    const toggleCard = (c, b) => {
                        c.classList.toggle('expanded');
                        const isExpanded = c.classList.contains('expanded');
                        b.setAttribute('aria-expanded', isExpanded);
                        const icon = c.querySelector('i.fa-chevron-down, i.fa-chevron-up');
                        if (icon) {
                            icon.classList.toggle('fa-chevron-down', !isExpanded);
                            icon.classList.toggle('fa-chevron-up', isExpanded);
                        }
                    };

                    if (btn) {
                        btn.addEventListener('click', (e) => {
                            e.stopPropagation();
                            toggleCard(card, btn);
                        });
                        btn.addEventListener('keydown', (e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                e.stopPropagation();
                                toggleCard(card, btn);
                            }
                        });
                    }
                });



                if (window.gsap && window.ScrollTrigger) {
                    setTimeout(() => {
                        ScrollTrigger.refresh();
                        gsap.from('#home-packages-grid .package-card-lux', {
                            scrollTrigger: {
                                trigger: '.packages-premium',
                                start: "top 80%",
                            },
                            y: 80,
                            opacity: 0,
                            duration: 0.8,
                            stagger: 0.15,
                            ease: "power4.out"
                        });
                    }, 100);
                }
            }
            renderHomePackages();
        });
    