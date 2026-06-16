/* TITAN FITNESS CLUB - Core Premium Client Handler */

// 1. DATA DICTIONARIES
const WORKOUT_PROGRAMS = [
  {
    id: 'prog-strength',
    title: 'Strength Training & Powerlifting',
    description: 'Master compound movements like squats, deadlifts, and bench presses under expert supervision. Build a foundation of raw skeletal power and improve physical resilience.',
    duration: '12 Weeks Protocol',
    intensity: 'Intermediate',
    target: 'Full Body Power & Posture',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'prog-fatloss',
    title: 'Fat Loss & High MET Burn',
    description: 'A scientifically calibrated fat reduction framework that optimizes metabolic outputs. Combines explosive calorie expenditure with targeted steady-state recovery.',
    duration: '8 Weeks Cycle',
    intensity: 'All Levels',
    target: 'Optimized Caloric Burn & Definition',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'prog-hypertrophy',
    title: 'Muscle Building & Hypertrophy',
    description: 'Bespoke bodybuilding protocols focusing on progressive overload, symmetrical muscle development, and specialized split-routines for maximum shape and fiber density.',
    duration: '16 Weeks Split',
    intensity: 'Advanced',
    target: 'Muscular Sizing & Proportion',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'prog-functional',
    title: 'Functional Fitness & Athletic mobility',
    description: 'Enhance your daily quality of life with multi-planar interactive exercises that stabilize stabilizer muscle groups, fix joints, and bolster dynamic flexibility.',
    duration: 'Ongoing Training',
    intensity: 'All Levels',
    target: 'Balance, Flex & Core Integration',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'prog-hiit',
    title: 'HIIT High Intensity Intervals',
    description: 'Rapid-fire anaerobic challenges utilizing rowing machines, kettlebells, battle ropes, and plyometric boxes. Excellent for working professionals with tight schedules.',
    duration: '45 Mins Daily',
    intensity: 'Advanced',
    target: 'Endurance & Cardio Peak',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'prog-women',
    title: 'Women’s Elite Toning & Fitness',
    description: 'Curated programs emphasizing posture, core strength, hip mobility, lower body activation, and comfortable guidance in an supportive environment.',
    duration: 'Ongoing Progress',
    intensity: 'All Levels',
    target: 'Tone, Athletic Power & Joint Health',
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'prog-senior',
    title: 'Senior Vitality & Longevity Guidance',
    description: 'Carefully measured routines for elder adults prioritizing strength retention, cartilage preservation, high-confidence stability drills, and light cardiovascular exercises.',
    duration: 'Ongoing Habit',
    intensity: 'Beginner',
    target: 'Longevity, Freedom of Movement',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'prog-beginner',
    title: 'Beginner Transformation Program',
    description: 'A gentle, systematic welcome to the physical fitness lifestyle. Demystifies heavy machinery, teaches proper breathing mechanics, and establishes healthy physical habits without intimidation.',
    duration: '6 Weeks Gateway',
    intensity: 'Beginner',
    target: 'Routine Creation & Gym Confidence',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop'
  }
];

const MEMBERSHIP_PLANS = [
  {
    id: 'plan-basic',
    name: 'Basic Membership',
    price: 1499,
    description: 'Access the absolute core amenities needed to forge a powerful routine on your own timeline.',
    tier: 'basic',
    features: [
      'Full Access to Premium Strength Floors',
      'Advanced High-Flow Cardio Machines',
      'Spacious Individual Showers & Lockers',
      '1 complimentary Personal Trainer intro session',
      'Flexible Hours: Monday–Saturday (5 AM to 10 PM)'
    ]
  },
  {
    id: 'plan-premium',
    name: 'Premium Club Tier',
    price: 2499,
    description: 'Engage with expert-guided group structures, dynamic zones, and holistic progress analysis.',
    tier: 'premium',
    isPopular: true,
    features: [
      'Everything in Basic Membership included',
      'Unlimited Group Fitness Classes & Zumba',
      'Full access to dedicated HIIT & Functional Zones',
      'Bi-weekly InBody™ Body Composition Analyses',
      '2 structured personal trainer check-ins per month',
      'Access to members-only exclusive club events'
    ]
  },
  {
    id: 'plan-elite',
    name: 'Elite Titan Transformation',
    price: 4999,
    description: 'The ultimate bespoke experience designed for accelerated, hyper-personalized athletic transformations.',
    tier: 'elite',
    features: [
      'Everything in Premium Membership included',
      '4 Private 1-on-1 Personal Training sessions/mo',
      'Bespoke Diet & Macronutrient Guide by Head Dietician',
      'Unlimited Access to Premium Yoga & Core Conditioning',
      'Dedicated personal permanent locker & fresh towel service',
      'Direct WhatsApp helpline and priority support from Rajesh'
    ]
  }
];

const TRAINERS = [
  {
    id: 'trainer-rajesh',
    name: 'Rajesh "The Titan" Sharma',
    specialty: 'Head Strength & Hypertrophy Coach',
    certifications: ["Gold's Gym Academy Certified", 'ACSM National Senior Trainer', 'ISSA Certified Master Trainer'],
    experience: 12,
    image: 'https://images.unsplash.com/photo-1605296867304-46d5465a25f1?q=80&w=600&auto=format&fit=crop',
    quote: 'The bar only weighs what it weighs. It has no opinion. Moving it is a conversation between your will and your skeleton.'
  },
  {
    id: 'trainer-priya',
    name: 'Priya Chaudhary',
    specialty: 'Women’s Elite Trainer & HIIT Catalyst',
    experience: 8,
    certifications: ['ACE Certified Personal Trainer', 'Reebok Kettlebell Alliance Gold', 'AFAA Active Group Fitness'],
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=600&auto=format&fit=crop',
    quote: 'Physical strength represents emotional independence. I do not train plates, I cultivate unshakeable human self-esteem.'
  },
  {
    id: 'trainer-vikram',
    name: 'Vikram Singh',
    specialty: 'Functional Fitness & Joint Mobility Specialist',
    experience: 9,
    certifications: ['CrossFit Level 3 Coach', 'NASM Corrective Exercise Specialist (CES)'],
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=600&auto=format&fit=crop',
    quote: 'Joint integrity dictates strength volume. Learn to anchor your skeleton correctly, and progress becomes mathematical.'
  },
  {
    id: 'trainer-ananya',
    name: 'Ananya Gupta',
    specialty: 'Certified Dietician & Beginner Guidance',
    experience: 7,
    certifications: ['M.Sc in Food & Nutrition (DU)', 'ISSA Certified Nutritionist'],
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=600&auto=format&fit=crop',
    quote: 'You cannot spend 1 hour in the gym to out-train a chaotic lifestyle. Habit formation is the ultimate power lift.'
  }
];

const TRANSFORMATION_STORIES = [
  {
    id: 'story-amit',
    name: 'Amit Verma (34, Noida Corporate Manager)',
    goal: 'Combating Prediabetes & High Visceral Fat',
    achievement: 'Lost 22 kg & Completely Normalized HbA1c',
    duration: '6 Months',
    beforeWeight: '98 kg',
    afterWeight: '76 kg',
    testimonial: 'Late-night corporate catering and bad posture had crippled my stamina. Trainer Rajesh engineered a realistic, high-efficiency compound workout schedule around my board calls, while Ananya systematically restructured my macro-nutrition. I am prediabetes-free and carry myself with unmatched daily mental clarity.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'story-rahul',
    name: 'Rahul Rawat (21, Direct Student)',
    goal: 'Ectomorph Hypertrophy & Symmetrical Muscle gain',
    achievement: 'Acquired 12.5 kg of Dense Skeletal Muscle',
    duration: '8 Months',
    beforeWeight: '57 kg',
    afterWeight: '69.5 kg',
    testimonial: 'I was highly self-conscious at university due to my lean frame. Vikram taught me proper structural breathing and how to overload bench, squat, and pull-ups without joint pain. The premium equipment here is incredibly smooth, and the community is highly positive. This did not just transform my posture, it forged supreme mental grit.',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'story-sneha',
    name: 'Sneha Kapoor (29, Mother of Two)',
    goal: 'Postpartum Core Stabilization & Spinal Rehab',
    achievement: 'Restored Dynamic Pelvic Strength & Core Power',
    duration: '5 Months',
    beforeWeight: 'Persistent Backaches',
    afterWeight: 'Full Pain-free Mobility',
    testimonial: 'I had standard lower backaches and weak pelvic alignment after having my child. Priya created a specialized functional safety track that restored my midline strength without dangerous exercises. Today, I lift my children pain-free, sprint uphill, and feel stronger than I did at twenty.',
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=800&auto=format&fit=crop'
  }
];

const CLASS_SCHEDULE = [
  // Monday
  { id: 'mon-hiit', className: 'HIIT Burnout', category: 'HIIT', dayOfWeek: 'Monday', timeStart: '06:00 AM', timeEnd: '06:45 AM', trainerName: 'Priya Chaudhary', room: 'Arena Suite A', spotsLeft: 8 },
  { id: 'mon-strength', className: 'Barbell Mastery', category: 'Strength', dayOfWeek: 'Monday', timeStart: '07:30 AM', timeEnd: '08:30 AM', trainerName: 'Rajesh Sharma', room: 'Strength Stage', spotsLeft: 5 },
  { id: 'mon-yoga', className: 'Power Vinyasa', category: 'Yoga', dayOfWeek: 'Monday', timeStart: '06:00 PM', timeEnd: '07:00 PM', trainerName: 'Ananya Gupta', room: 'Zen Pavilion', spotsLeft: 12 },
  { id: 'mon-functional', className: 'Kinetic Movement', category: 'Functional', dayOfWeek: 'Monday', timeStart: '07:15 PM', timeEnd: '08:15 PM', trainerName: 'Vikram Singh', room: 'Combat Arena', spotsLeft: 9 },

  // Tuesday
  { id: 'tue-func', className: 'Kettlebell & Flow', category: 'Functional', dayOfWeek: 'Tuesday', timeStart: '06:30 AM', timeEnd: '07:30 AM', trainerName: 'Vikram Singh', room: 'Combat Arena', spotsLeft: 7 },
  { id: 'tue-zumba', className: 'Cardio Zumba', category: 'Zumba', dayOfWeek: 'Tuesday', timeStart: '08:00 AM', timeEnd: '09:00 AM', trainerName: 'Priya Chaudhary', room: 'Studio B', spotsLeft: 15 },
  { id: 'tue-core', className: 'Core Steel Clinic', category: 'Core', dayOfWeek: 'Tuesday', timeStart: '06:00 PM', timeEnd: '06:45 PM', trainerName: 'Rajesh Sharma', room: 'Strength Stage', spotsLeft: 10 },
  { id: 'tue-hiit', className: 'Metcon 45', category: 'HIIT', dayOfWeek: 'Tuesday', timeStart: '07:00 PM', timeEnd: '07:45 PM', trainerName: 'Priya Chaudhary', room: 'Arena Suite A', spotsLeft: 6 },

  // Wednesday
  { id: 'wed-hiit', className: 'HIIT Burnout', category: 'HIIT', dayOfWeek: 'Wednesday', timeStart: '06:00 AM', timeEnd: '06:45 AM', trainerName: 'Priya Chaudhary', room: 'Arena Suite A', spotsLeft: 11 },
  { id: 'wed-strength', className: 'Barbell Mastery', category: 'Strength', dayOfWeek: 'Wednesday', timeStart: '07:30 AM', timeEnd: '08:30 AM', trainerName: 'Rajesh Sharma', room: 'Strength Stage', spotsLeft: 4 },
  { id: 'wed-yoga', className: 'Power Vinyasa', category: 'Yoga', dayOfWeek: 'Wednesday', timeStart: '06:00 PM', timeEnd: '07:00 PM', trainerName: 'Ananya Gupta', room: 'Zen Pavilion', spotsLeft: 14 },
  { id: 'wed-functional', className: 'Kinetic Movement', category: 'Functional', dayOfWeek: 'Wednesday', timeStart: '07:15 PM', timeEnd: '08:15 PM', trainerName: 'Vikram Singh', room: 'Combat Arena', spotsLeft: 8 },

  // Thursday
  { id: 'thu-func', className: 'Kettlebell & Flow', category: 'Functional', dayOfWeek: 'Thursday', timeStart: '06:30 AM', timeEnd: '07:30 AM', trainerName: 'Vikram Singh', room: 'Combat Arena', spotsLeft: 10 },
  { id: 'thu-zumba', className: 'Cardio Zumba', category: 'Zumba', dayOfWeek: 'Thursday', timeStart: '08:00 AM', timeEnd: '09:00 AM', trainerName: 'Priya Chaudhary', room: 'Studio B', spotsLeft: 20 },
  { id: 'thu-core', className: 'Core Steel Clinic', category: 'Core', dayOfWeek: 'Thursday', timeStart: '06:00 PM', timeEnd: '06:45 PM', trainerName: 'Rajesh Sharma', room: 'Strength Stage', spotsLeft: 11 },
  { id: 'thu-hiit', className: 'Metcon 45', category: 'HIIT', dayOfWeek: 'Thursday', timeStart: '07:00 PM', timeEnd: '07:45 PM', trainerName: 'Priya Chaudhary', room: 'Arena Suite A', spotsLeft: 4 },

  // Friday
  { id: 'fri-hiit', className: 'HIIT Burnout', category: 'HIIT', dayOfWeek: 'Friday', timeStart: '06:00 AM', timeEnd: '06:45 AM', trainerName: 'Priya Chaudhary', room: 'Arena Suite A', spotsLeft: 9 },
  { id: 'fri-strength', className: 'Barbell Mastery', category: 'Strength', dayOfWeek: 'Friday', timeStart: '07:30 AM', timeEnd: '08:30 AM', trainerName: 'Rajesh Sharma', room: 'Strength Stage', spotsLeft: 3 },
  { id: 'fri-yoga', className: 'Power Vinyasa', category: 'Yoga', dayOfWeek: 'Friday', timeStart: '06:00 PM', timeEnd: '07:00 PM', trainerName: 'Ananya Gupta', room: 'Zen Pavilion', spotsLeft: 15 },
  { id: 'fri-functional', className: 'Kinetic Movement', category: 'Functional', dayOfWeek: 'Friday', timeStart: '07:15 PM', timeEnd: '08:15 PM', trainerName: 'Vikram Singh', room: 'Combat Arena', spotsLeft: 6 },

  // Saturday
  { id: 'sat-strength', className: 'Super Symmetrical Hypertrophy', category: 'Strength', dayOfWeek: 'Saturday', timeStart: '07:00 AM', timeEnd: '08:30 AM', trainerName: 'Rajesh Sharma', room: 'Strength Stage', spotsLeft: 5 },
  { id: 'sat-hiit', className: 'Explosive Weekend HIIT', category: 'HIIT', dayOfWeek: 'Saturday', timeStart: '09:00 AM', timeEnd: '10:00 AM', trainerName: 'Priya Chaudhary', room: 'Arena Suite A', spotsLeft: 12 },
  { id: 'sat-zumba', className: 'Vibrant Zumba Fest', category: 'Zumba', dayOfWeek: 'Saturday', timeStart: '11:00 AM', timeEnd: '12:15 PM', trainerName: 'Priya Chaudhary', room: 'Studio B', spotsLeft: 18 },
  { id: 'sat-yoga', className: 'Restorative Yoga', category: 'Yoga', dayOfWeek: 'Saturday', timeStart: '05:00 PM', timeEnd: '06:30 PM', trainerName: 'Ananya Gupta', room: 'Zen Pavilion', spotsLeft: 22 }
];

const GALLERY_ITEMS = [
  {
    id: 'gal-1',
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop',
    title: 'Strength Floor Arena',
    description: 'Bespoke powerlifting racks and premium precision dumbbells arrayed up to 60 kgs.'
  },
  {
    id: 'gal-2',
    src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
    title: 'Cardio Core Platform',
    description: 'Immersive low-impact treadmills, stationary bicycles, and dynamic simulated hill climbers.'
  },
  {
    id: 'gal-3',
    src: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1200&auto=format&fit=crop',
    title: 'Combat & HIIT Facility',
    description: 'Spacious high-impact padded mat floors constructed for battle ropes, kettlebells and power boxing.'
  },
  {
    id: 'gal-4',
    src: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
    title: 'Individual Form Correction',
    description: 'State-certified elite physical coaches analyzing joint biomechanics, spinal posture, and muscular focus.'
  },
  {
    id: 'gal-5',
    src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1200&auto=format&fit=crop',
    title: 'Group Class Training',
    description: 'High-octane, rhythm-aligned group sessions combining body weight gymnastics and active cardio intervals.'
  },
  {
    id: 'gal-6',
    src: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1200&auto=format&fit=crop',
    title: 'Our Premium Space Interior',
    description: 'Clean, continuous air purification, luxury metallic-accented styling, and premium lighting.'
  }
];

const TESTIMONIALS = [
  {
    id: 'test-1',
    name: 'Karan Malhotra',
    rating: 5,
    reviewText: 'Titan is easily the best gym in Indirapuram. I have been training here for 11 months. The equipment calibration is professional, the change rooms are absolutely pristine, and the continuous air conditioning is perfect.',
    tags: ['Ultra Clean', 'Elite Gear'],
    date: '2026-05-18'
  },
  {
    id: 'test-2',
    name: 'Dr. Meera Vasudevan',
    rating: 5,
    reviewText: 'Being a medical practitioner, I am highly sensitive to spinal posture. Vikram Singh understands correct joint hinges and rehab cues better than most physical therapists. Highly hygienic and supportive!',
    tags: ['Certified Coaches', 'Safe Drills'],
    date: '2026-04-12'
  },
  {
    id: 'test-3',
    name: 'Rishabh Tyagi',
    rating: 5,
    reviewText: 'I started with the 6-Week Beginner Transformation program. Truly zero intimidation! The older trainers actively guide and teach you how to properly set up seat heights and lift with proper posture. Highly recommended.',
    tags: ['Friendly Vibe', 'Habit Guidance'],
    date: '2026-02-09'
  }
];

const FAQS = [
  {
    id: 'faq-1',
    question: 'Do you offer personal training packages at Titan Fitness Club?',
    answer: 'Yes! We offer personal training with highly certified, senior physical coaches. Personal training can be bundled within our \"Elite Titan Transformation\" membership, or purchased as separate, dedicated blocks of 12, 24, or 48 coaching sessions. Each trainer specializes in distinct fields such as Hypertrophy, Medical Posture Restoration, Powerlifting, or Postpartum Core Safety.'
  },
  {
    id: 'faq-2',
    question: 'Is there a free trial session for Indirapuram residents?',
    answer: 'Absolutely. We offer a 1-day complimentary all-access pass for prospective members residing in Indirapuram, Ghaziabad, or surrounding areas. This pass includes full access to the strength gym floors, cardio zone, lockers/showers, and a brief posture analysis check. Please use the "Start Free Trial" button on our website to book your slot.'
  },
  {
    id: 'faq-3',
    question: 'Are absolute beginners welcome? I’ve never lifted a barbell.',
    answer: 'Yes, over 40% of our members started their fitness journey with us. We pride ourselves on a welcoming, non-judgmental environment. Every basic and premium membership includes a dedicated 1-on-1 machine safety and breathing orientation session, ensuring you lift safely, confidently, and comfortably.'
  },
  {
    id: 'faq-4',
    question: 'What are the membership charges at Titan Fitness Club?',
    answer: 'Our memberships are split into three clear tiers for maximum transparency: Basic is priced at ₹1,499/mo, Premium Group-Access is ₹2,499/mo, and our bespoke Elite personal-coached tier is ₹4,999/mo. We offer attractive discounts of 15% on quarterly plans and up to 30% on annual memberships with zero hidden registration fees.'
  }
];


// 2. STATE LOGIC VARIABLE BINDINGS
let currentSelectedGoal = 'General Fitness';
let selectedSchedulerDay = 'Monday';
let selectedSchedulerCategory = 'All Classes';
let selectedPricingCycle = 'monthly';
let currentGalleryLightboxIdx = 0;


// 3. INITIALIZATION & EVEN LISTENERS TRIGGER LAYERS
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initBiometricsCalcs();
  initScheduleTimetable();
  initPricingCycle();
  initLightboxFacilityViewer();
  initAccordionCore();
  initContactsValidation();
  initScrollTopTrigger();
});


// NAVBAR HANDLERS
function initNavbar() {
  const navbarElement = document.getElementById('titan-navbar');
  const menuTrigger = document.getElementById('menu-trigger');
  const mobileDrawer = document.getElementById('mobile-drawer');

  // Dynamic Scroll Background Class Toggle
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbarElement.classList.remove('initial');
      navbarElement.classList.add('scrolled');
    } else {
      navbarElement.classList.remove('scrolled');
      navbarElement.classList.add('initial');
    }

    // Scroll tracker: highlight active link
    const sections = ['home', 'about', 'why-us', 'programs', 'schedule', 'membership', 'trainers', 'transformations', 'gallery', 'faq', 'contact'];
    let activeFound = false;

    for (const section of sections) {
      const el = document.getElementById(section);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          activeFound = true;
          setNavActive(section);
          break;
        }
      }
    }
  });

  // Mobile Drawer toggles
  if (menuTrigger && mobileDrawer) {
    menuTrigger.addEventListener('click', () => {
      mobileDrawer.classList.toggle('active');
    });

    const mobileLinks = mobileDrawer.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('active');
      });
    });
  }
}

function setNavActive(sectionId) {
  const links = document.querySelectorAll('.nav-link');
  links.forEach(l => {
    if (l.getAttribute('href') === `#${sectionId}`) {
      l.classList.add('active');
    } else {
      l.classList.remove('active');
    }
  });
}


// BIOMETRICS CALCULATOR HANDLERS
function initBiometricsCalcs() {
  const genderMaleBtn = document.getElementById('gender-male-btn');
  const genderFemaleBtn = document.getElementById('gender-female-btn');
  const heightSlider = document.getElementById('input-height');
  const heightNumInput = document.getElementById('height-num');
  const heightLabelVal = document.getElementById('height-lbl-val');
  
  const weightSlider = document.getElementById('input-weight');
  const weightNumInput = document.getElementById('weight-num');
  const weightLabelVal = document.getElementById('weight-lbl-val');

  const ageInput = document.getElementById('input-age');
  const activityDropSel = document.getElementById('select-activity');
  const biometricFormulaForm = document.getElementById('biometric-formula-form');
  const outputBiometricResult = document.getElementById('output-biometric-result');

  let activeGender = 'Male';

  if (genderMaleBtn && genderFemaleBtn) {
    genderMaleBtn.addEventListener('click', () => {
      activeGender = 'Male';
      genderMaleBtn.classList.add('btn-primary');
      genderMaleBtn.classList.remove('btn-secondary');
      genderFemaleBtn.classList.add('btn-secondary');
      genderFemaleBtn.classList.remove('btn-primary');
    });

    genderFemaleBtn.addEventListener('click', () => {
      activeGender = 'Female';
      genderFemaleBtn.classList.add('btn-primary');
      genderFemaleBtn.classList.remove('btn-secondary');
      genderMaleBtn.classList.add('btn-secondary');
      genderMaleBtn.classList.remove('btn-primary');
    });
  }

  // Dual linking of height sliders and inputs
  if (heightSlider && heightNumInput && heightLabelVal) {
    heightSlider.addEventListener('input', (e) => {
      heightNumInput.value = e.target.value;
      heightLabelVal.innerText = `${e.target.value} cm`;
    });
    heightNumInput.addEventListener('input', (e) => {
      heightSlider.value = e.target.value;
      heightLabelVal.innerText = `${e.target.value} cm`;
    });
  }

  // Dual linking of weight sliders and inputs
  if (weightSlider && weightNumInput && weightLabelVal) {
    weightSlider.addEventListener('input', (e) => {
      weightNumInput.value = e.target.value;
      weightLabelVal.innerText = `${e.target.value} kg`;
    });
    weightNumInput.addEventListener('input', (e) => {
      weightSlider.value = e.target.value;
      weightLabelVal.innerText = `${e.target.value} kg`;
    });
  }

  if (biometricFormulaForm) {
    biometricFormulaForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const heightVal = parseFloat(heightNumInput.value) || 175;
      const weightVal = parseFloat(weightNumInput.value) || 72;
      const ageVal = parseFloat(ageInput.value) || 26;
      const activityMult = parseFloat(activityDropSel.value) || 1.375;

      // BMI index
      const heightInM = heightVal / 100;
      const bmiVal = Math.round((weightVal / (heightInM * heightInM)) * 10) / 10;

      let bmiCategory = '';
      let badgeClass = '';
      if (bmiVal < 18.5) {
        bmiCategory = 'Underweight';
        badgeClass = 'bg-amber-950/40 text-amber-400 border border-amber-900/50';
      } else if (bmiVal < 25.0) {
        bmiCategory = 'Healthy Weight';
        badgeClass = 'bg-emerald-950/40 text-emerald-400 border border-emerald-900/40';
      } else if (bmiVal < 30.0) {
        bmiCategory = 'Overweight';
        badgeClass = 'bg-amber-950/40 text-amber-400 border border-amber-900/50';
      } else {
        bmiCategory = 'Obesity Zone';
        badgeClass = 'bg-red-950/45 text-red-500 border border-red-900/50';
      }

      // Mifflin-St Jeor BMR
      let bmrVal = 10 * weightVal + 6.25 * heightVal - 5 * ageVal;
      bmrVal = (activeGender === 'Male') ? bmrVal + 5 : bmrVal - 161;
      bmrVal = Math.round(bmrVal);

      // TDEE estimated daily thresholds
      const tdeeVal = Math.round(bmrVal * activityMult);

      // Intelligent Program Recommendation mappings
      let recommendedName = 'Functional Fitness & Athletic mobility';
      if (bmiVal >= 26.0) {
        recommendedName = 'Fat Loss & High MET Burn';
      } else if (bmiVal < 19.5 && activeGender === 'Male') {
        recommendedName = 'Muscle Building & Hypertrophy';
      } else if (activityMult >= 1.55) {
        recommendedName = 'Strength Training & Powerlifting';
      }

      // Populate results section
      outputBiometricResult.innerHTML = `
        <div class="grid grid-cols-3-md gap-4 mt-6 animate-slideUp">
          <div class="p-4 bg-zinc-900 rounded border border-zinc-800" style="text-align: left;">
            <span class="font-mono text-xs text-zinc-500 uppercase tracking-widest block">Body Index (BMI)</span>
            <div class="font-mono text-2xl font-black text-white mt-1">${bmiVal}</div>
            <span class="text-xs font-bold uppercase tracking-wide inline-block px-2.5 py-0.5 mt-2 rounded ${badgeClass}">
              ${bmiCategory}
            </span>
          </div>

          <div class="p-4 bg-zinc-900 rounded border border-zinc-800" style="text-align: left;">
            <span class="font-mono text-xs text-zinc-500 uppercase tracking-widest block">BMR Rest Burn</span>
            <div class="font-mono text-2xl font-black text-white mt-1">${bmrVal} <span class="text-xs font-normal text-zinc-500">kcal</span></div>
            <p class="text-[10px] text-zinc-400 mt-2 leading-normal">Baseline energy spent at absolute resting frame.</p>
          </div>

          <div class="p-4 bg-zinc-900 rounded border border-zinc-800" style="text-align: left;">
            <span class="font-mono text-xs text-zinc-500 uppercase tracking-widest block">TDEE Burn Estimate</span>
            <div class="font-mono text-2xl font-black text-gold-400 mt-1">${tdeeVal} <span class="text-xs font-normal text-zinc-500">kcal</span></div>
            <p class="text-[10px] text-zinc-400 mt-2 leading-normal">Energetic threshold to hold current biometrics weight.</p>
          </div>

          <div class="span-6-lg p-5 bg-gold-950/20 border border-gold-500/20 rounded-lg flex flex-col gap-3 justify-between items-center" style="grid-column: span 3; text-align: left; flex-direction: row;">
            <div>
              <span class="font-mono text-[9px] uppercase text-gold-400 font-bold tracking-widest">SUGGESTED WORKOUT PROFILE</span>
              <h4 class="text-white text-sm font-extrabold uppercase mt-1">${recommendedName}</h4>
            </div>
            <button type="button" class="btn btn-secondary py-2 px-4" onclick="openClaimPassModal('${recommendedName}')" style="padding: 0.5rem 1rem; border-radius: 0.375rem; white-space: nowrap;">
              Select Program
            </button>
          </div>
        </div>
      `;
      outputBiometricResult.classList.remove('hidden');
    });
  }
}


// WEEKLY TIMETABLE SCHEDULE CONTROLLER
function initScheduleTimetable() {
  const dayPills = document.querySelectorAll('.day-pill');
  const catPills = document.querySelectorAll('.cat-pill');

  dayPills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      dayPills.forEach(btn => btn.classList.remove('active'));
      pill.classList.add('active');
      selectedSchedulerDay = pill.getAttribute('data-day');
      renderSchedule();
    });
  });

  catPills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      catPills.forEach(btn => btn.classList.remove('active'));
      pill.classList.add('active');
      selectedSchedulerCategory = pill.getAttribute('data-category');
      renderSchedule();
    });
  });

  renderSchedule();
}

function renderSchedule() {
  const scheduleRowGrid = document.getElementById('schedule-list-display');
  if (!scheduleRowGrid) return;

  const filtered = CLASS_SCHEDULE.filter(item => {
    const matchesDay = item.dayOfWeek === selectedSelectedDayFix(selectedSchedulerDay);
    const matchesCat = (selectedSchedulerCategory === 'All Classes') || (item.category === selectedSchedulerCategory);
    return matchesDay && matchesCat;
  });

  if (filtered.length > 0) {
    scheduleRowGrid.innerHTML = filtered.map(item => `
      <div class="card flex flex-col justify-between" style="text-align: left;">
        <div>
          <div class="flex justify-between items-center mb-4">
            <span class="font-mono text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-900 text-gold-400">
              ${item.category}
            </span>
            <span class="text-xs text-zinc-500">
              Spots Left: <span class="font-mono font-bold ${item.spotsLeft <= 5 ? 'text-red-500' : 'text-gold-400'}">${item.spotsLeft}</span>
            </span>
          </div>

          <h3 class="text-lg font-black uppercase text-white mb-4">${item.className}</h3>

          <div class="flex flex-col gap-2 mb-6 text-xs text-zinc-400">
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-gold-400"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              <span>${item.timeStart} – ${item.timeEnd}</span>
            </div>
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-gold-400"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              <span>Coach: ${item.trainerName}</span>
            </div>
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-gold-400"><path d="M12 2a8 8 0 0 0-8 8c0 1.5.5 3 1.5 4.5L12 22l6.5-7.5c1-1.5 1.5-3 1.5-4.5A8 8 0 0 0 12 2z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>Space: ${item.room}</span>
            </div>
          </div>
        </div>

        <button class="btn btn-secondary w-full py-2.5" onclick="openClaimPassModal('Class Focus: ${item.className}')">
          Book Session Pass
        </button>
      </div>
    `).join('');
  } else {
    scheduleRowGrid.innerHTML = `
      <div style="grid-column: span 3; text-align: center; padding: 4rem 1rem;">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-zinc-500 mb-4" style="margin-left:auto; margin-right:auto;"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
        <h4 class="text-md font-bold uppercase text-white mb-2">No Scheduled Sessions</h4>
        <p class="text-xs text-zinc-500">There are no ${selectedSchedulerCategory} modules scheduled on ${selectedSchedulerDay}. Choose another criteria.</p>
      </div>
    `;
  }
}

function selectedSelectedDayFix(d) {
  return d;
}


// MEMBERSHIP BILLING SWITCH SYSTEMS
function initPricingCycle() {
  const switchBtns = document.querySelectorAll('.cycle-switch-btn');
  switchBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      switchBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedPricingCycle = btn.getAttribute('data-cycle');
      renderMembershipPricing();
    });
  });
  renderMembershipPricing();
}

function renderMembershipPricing() {
  MEMBERSHIP_PLANS.forEach(plan => {
    let priceVal = plan.price;
    let periodSub = 'Per month';
    let saveNote = '';
    
    if (selectedPricingCycle === 'quarterly') {
      const diskVal = Math.round((plan.price * 0.85) / 10) * 10;
      priceVal = diskVal;
      periodSub = `₹${(diskVal * 3).toLocaleString('en-IN')} billed quarterly`;
      saveNote = 'Save 15% Quarterly!';
    } else if (selectedPricingCycle === 'annual') {
      const diskVal = Math.round((plan.price * 0.70) / 10) * 10;
      priceVal = diskVal;
      periodSub = `₹${(diskVal * 12).toLocaleString('en-IN')} billed annually`;
      saveNote = 'Save 30% Annual Pass!';
    }

    const priceEl = document.getElementById(`price-val-${plan.tier}`);
    const subEl = document.getElementById(`price-sub-${plan.tier}`);
    const saveEl = document.getElementById(`price-save-${plan.tier}`);

    if (priceEl) priceEl.innerText = `₹${priceVal.toLocaleString('en-IN')}`;
    if (subEl) subEl.innerText = periodSub;
    if (saveEl) {
      if (saveNote) {
        saveEl.innerText = saveNote;
        saveEl.classList.remove('hidden');
      } else {
        saveEl.classList.add('hidden');
      }
    }
  });
}


// PORTFOLIO AND ATTACHED LIGHTBOX CONTROLLER
function initLightboxFacilityViewer() {
  const lightboxOverlay = document.getElementById('lightbox-inspector');
  const lightboxImg = document.getElementById('lightbox-main-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxCount = document.getElementById('lightbox-count');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  // Launch lightbox from any of gallery cards click references
  const galleryCards = document.querySelectorAll('.gallery-card');
  galleryCards.forEach((card, index) => {
    card.addEventListener('click', () => {
      currentGalleryLightboxIdx = index;
      openLightboxFrame();
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
      lightboxOverlay.classList.remove('active');
    });
  }

  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      currentGalleryLightboxIdx = (currentGalleryLightboxIdx > 0) ? currentGalleryLightboxIdx - 1 : GALLERY_ITEMS.length - 1;
      openLightboxFrame();
    });
  }

  if (lightboxNext) {
    lightboxNext.addEventListener('click', (e) => {
      e.stopPropagation();
      currentGalleryLightboxIdx = (currentGalleryLightboxIdx < GALLERY_ITEMS.length - 1) ? currentGalleryLightboxIdx + 1 : 0;
      openLightboxFrame();
    });
  }

  if (lightboxOverlay) {
    lightboxOverlay.addEventListener('click', () => {
      lightboxOverlay.classList.remove('active');
    });
  }

  function openLightboxFrame() {
    const activeItem = GALLERY_ITEMS[currentGalleryLightboxIdx];
    if (!activeItem) return;

    lightboxImg.src = activeItem.src;
    lightboxTitle.innerText = activeItem.title;
    lightboxDesc.innerText = activeItem.description;
    lightboxCount.innerText = `${currentGalleryLightboxIdx + 1} / ${GALLERY_ITEMS.length}`;
    lightboxOverlay.classList.add('active');
  }
}


// ACCORDION MODULES
function initAccordionCore() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    trigger.addEventListener('click', () => {
      const parentIsActive = item.classList.contains('active');
      
      // Close all accordions
      faqItems.forEach(faq => faq.classList.remove('active'));

      // If it wasn't open, open it
      if (!parentIsActive) {
        item.classList.add('active');
      }
    });
  });
}


// CONTACT FORMS AND WHATSAPP REDIRECTS GENERATION
function initContactsValidation() {
  const regularForm = document.getElementById('footer-contact-form');
  const modalForm = document.getElementById('modal-contact-form');
  const claimModal = document.getElementById('claim-pass-modal');
  const modalClose = document.getElementById('modal-close');
  const claimPassInputs = document.querySelectorAll('.claim-pass-launch-btn');

  // Close free pass modal triggers
  if (modalClose && claimModal) {
    modalClose.addEventListener('click', () => {
      claimModal.classList.remove('active');
    });
    claimModal.addEventListener('click', (e) => {
      if (e.target === claimModal) {
        claimModal.classList.remove('active');
      }
    });
  }

  claimPassInputs.forEach(btn => {
    btn.addEventListener('click', () => {
      const focusProg = btn.getAttribute('data-program') || 'General trial Pass';
      openClaimPassModal(focusProg);
    });
  });

  registerFormSubmission(regularForm, false);
  registerFormSubmission(modalForm, true);
}

function openClaimPassModal(programName) {
  const claimModal = document.getElementById('claim-pass-modal');
  const selectedFocusInput1 = document.getElementById('modal-input-goal');
  
  if (selectedFocusInput1) {
    selectedFocusInput1.value = programName;
  }
  
  currentSelectedGoal = programName;
  if (claimModal) {
    claimModal.classList.add('active');
  }
}

// Bind modal opening to window scope so calculations button triggers too
window.openClaimPassModal = openClaimPassModal;

function registerFormSubmission(formEl, isModal) {
  if (!formEl) return;

  const phoneInput = formEl.querySelector('[name="phone"]');
  const nameInput = formEl.querySelector('[name="name"]');
  const goalInput = formEl.querySelector('[name="goal"]');
  const msgInput = formEl.querySelector('[name="message"]');

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // reset errors
    const errorContainers = formEl.querySelectorAll('.form-error');
    errorContainers.forEach(container => container.classList.add('hidden'));
    
    let is_valid = true;

    // validation
    if (!nameInput.value.trim() || nameInput.value.trim().length < 3) {
      is_valid = false;
      const el = formEl.querySelector('.error-name-container');
      if (el) el.classList.remove('hidden');
    }

    const cleanPhone = phoneInput.value.replace(/[^0-9]/g, '');
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(cleanPhone)) {
      is_valid = false;
      const el = formEl.querySelector('.error-phone-container');
      if (el) el.classList.remove('hidden');
    }

    if (!is_valid) return;

    // Build URL Redirect to WhatsApp
    const fMessage = `🔥 *TITAN FITNESS CLUB - PRE-FILLED PASS BOOKING* 🔥\n\n` +
      `• *Name:* ${nameInput.value.trim()}\n` +
      `• *Indian Contact:* ${cleanPhone}\n` +
      `• *Workout Goal/Program:* ${goalInput.value}\n` +
      `• *Additional Note:* ${msgInput ? msgInput.value.trim() || 'None' : 'None'}\n\n` +
      `Please register my free day trial pass & schedule my biometric posture tour!`;

    const redirectUrl = `https://wa.me/919811446304?text=${encodeURIComponent(fMessage)}`;

    // Show toast success message
    const mainSuccessToast = document.getElementById('main-success-toast');
    if (mainSuccessToast) {
      mainSuccessToast.style.display = 'flex';
      setTimeout(() => {
        mainSuccessToast.style.display = 'none';
      }, 7000);
    }

    // Close Modal if inside modal
    if (isModal) {
      const claimModal = document.getElementById('claim-pass-modal');
      if (claimModal) claimModal.classList.remove('active');
    }

    // Reset fields
    nameInput.value = '';
    phoneInput.value = '';
    if (msgInput) msgInput.value = '';

    // Direct redirection execution
    window.open(redirectUrl, '_blank');
  });
}


// AUXILIARY BACK TO TOP ROUND TRIGGER
function initScrollTopTrigger() {
  const backTopBtn = document.getElementById('aux-back-top');
  if (!backTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backTopBtn.classList.remove('hidden');
    } else {
      backTopBtn.classList.add('hidden');
    }
  });

  backTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function dismissToast() {
  const mainSuccessToast = document.getElementById('main-success-toast');
  if (mainSuccessToast) {
    mainSuccessToast.style.display = 'none';
  }
}
window.dismissToast = dismissToast;
