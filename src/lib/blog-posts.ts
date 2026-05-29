import type { BlogPost, BlogSection } from "@/lib/blog-types";

const laserVsOpenTable = {
  type: "table" as const,
  headers: ["Feature", "Laser Surgery (LHP)", "Open Surgery"],
  rows: [
    ["Recovery Time", "2–3 days", "2–4 weeks"],
    ["Pain Level", "Minimal", "Moderate to severe"],
    ["Blood Loss", "Negligible", "Moderate"],
    ["Hospital Stay", "Daycare (same day)", "1–3 days admission"],
    ["Scarring / Stitches", "None", "Sutures required"],
    ["Return to Work", "2–3 days", "2–3 weeks"],
    ["Recurrence Risk", "Low with proper care", "Moderate"],
  ],
};

const pilesGrades = {
  type: "grades" as const,
  items: [
    { grade: "Grade 1", desc: "Small swellings inside the anal lining — bleeding without prolapse." },
    { grade: "Grade 2", desc: "Larger piles that prolapse during straining but return on their own." },
    { grade: "Grade 3", desc: "Piles prolapse during straining and must be pushed back manually." },
    { grade: "Grade 4", desc: "Permanently prolapsed piles that cannot be pushed back." },
  ],
};

const articleSections: Record<string, BlogSection[]> = {
  "laser-treatment-for-piles": [
    {
      id: "what-are-piles",
      heading: "What Are Piles (Haemorrhoids)?",
      blocks: [
        {
          type: "paragraph",
          text: "Piles (haemorrhoids) are swollen and inflamed veins in the rectum and anal canal. They are one of the most common anorectal conditions, affecting millions of adults. Many people delay treatment due to embarrassment — but early consultation prevents progression to advanced grades.",
        },
        {
          type: "callout",
          variant: "info",
          text: "At Sunrise Piles Hospital, Wakad, Dr. Satish Jadhav has treated 5,000+ patients using advanced laser techniques — with a 95%+ success rate and daycare discharge.",
        },
        {
          type: "paragraph",
          text: "Piles can cause bleeding, itching, pain, and a feeling of incomplete bowel evacuation. Left untreated, they can worsen over time and significantly affect daily life and work.",
        },
      ],
    },
    {
      id: "types-of-piles",
      heading: "Types of Piles",
      blocks: [
        {
          type: "subheading",
          text: "Internal Piles",
        },
        {
          type: "paragraph",
          text: "Located inside the rectum, internal piles are usually not visible or palpable. The most common symptom is painless bright red bleeding during or after bowel movements. They are classified into Grades 1–4 based on severity of prolapse.",
        },
        {
          type: "subheading",
          text: "External Piles",
        },
        {
          type: "paragraph",
          text: "Form under the skin around the anus, external piles can cause visible swelling, itching, irritation, and pain — especially while sitting or during bowel movements. Thrombosed external piles can cause sudden severe pain.",
        },
      ],
    },
    {
      id: "grades-of-piles",
      heading: "Grades of Piles",
      blocks: [
        {
          type: "paragraph",
          text: "Understanding the grade of your piles helps determine the right treatment. Grade 1–2 may respond to non-surgical options; Grade 3–4 typically require laser or surgical intervention.",
        },
        pilesGrades,
      ],
    },
    {
      id: "symptoms",
      heading: "Symptoms of Piles",
      blocks: [
        {
          type: "paragraph",
          text: "Piles symptoms vary by type and grade. Do not ignore persistent symptoms — early treatment is simpler and less invasive.",
        },
        {
          type: "list",
          items: [
            "Bright red blood on toilet paper or in the toilet bowl",
            "Itching, irritation, or discomfort around the anus",
            "Pain or soreness, especially during bowel movements",
            "A lump or swelling near the anus (prolapsed piles)",
            "Mucus discharge after passing stools",
            "Feeling of incomplete bowel evacuation",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          text: "Seek immediate medical attention if you experience heavy bleeding, black/tarry stools, severe pain, fever, or dizziness — these may indicate a more serious condition.",
        },
      ],
    },
    {
      id: "causes",
      heading: "Causes & Risk Factors",
      blocks: [
        {
          type: "paragraph",
          text: "Piles develop when increased pressure on the veins in the rectum and anus causes them to swell. Common contributing factors include:",
        },
        {
          type: "list",
          items: [
            "Chronic constipation and straining during bowel movements",
            "Low-fibre diet and inadequate water intake",
            "Prolonged sitting (desk jobs, long travel)",
            "Pregnancy and childbirth",
            "Obesity and sedentary lifestyle",
            "Heavy lifting and strenuous exercise",
            "Family history of piles",
            "Ageing — tissues supporting the veins weaken over time",
          ],
        },
      ],
    },
    {
      id: "laser-vs-open",
      heading: "Laser vs Open Surgery: Which Is Better?",
      blocks: [
        {
          type: "paragraph",
          text: "Laser Haemorrhoidoplasty (LHP) has replaced open haemorrhoidectomy as the preferred treatment for grade 2–4 piles at leading proctology centres. Here is a direct comparison:",
        },
        laserVsOpenTable,
        {
          type: "callout",
          variant: "info",
          text: "Laser surgery is bloodless, stitch-free, and allows same-day discharge — which is why thousands of patients in Pune choose laser treatment at Sunrise Piles Hospital.",
        },
      ],
    },
    {
      id: "laser-procedure",
      heading: "The Laser Procedure at Sunrise Piles Hospital",
      blocks: [
        {
          type: "paragraph",
          text: "Our daycare laser piles procedure is designed for maximum comfort and minimum disruption to your daily life. Here is what to expect:",
        },
        {
          type: "steps",
          items: [
            {
              title: "Consultation & Diagnosis",
              desc: "Dr. Jadhav examines the grade of piles, reviews your history, and recommends the best treatment plan.",
            },
            {
              title: "Pre-Procedure Preparation",
              desc: "Light fasting and bowel preparation as advised. Our team explains every step clearly.",
            },
            {
              title: "Laser Treatment (15–45 min)",
              desc: "Performed under local or short anaesthesia. Laser fibre shrinks haemorrhoidal tissue — no stitches.",
            },
            {
              title: "Recovery & Observation",
              desc: "Short rest period of 2–3 hours at the clinic with post-operative instructions.",
            },
            {
              title: "Same-Day Discharge",
              desc: "Go home the same day. Most patients resume desk work within 2–3 days.",
            },
            {
              title: "Follow-Up Care",
              desc: "Scheduled follow-up visits to ensure complete healing and prevent recurrence.",
            },
          ],
        },
      ],
    },
    {
      id: "insurance",
      heading: "Insurance & Cost",
      blocks: [
        {
          type: "paragraph",
          text: "Sunrise Piles Hospital accepts cashless and reimbursement from major insurance providers including PMJAY (Ayushman Bharat), ESI, Star Health, HDFC ERGO, New India Assurance, Bajaj Allianz, Niva Bupa, United India, Care Health, Reliance Health, and Shaan Medpay Capitals.",
        },
        {
          type: "paragraph",
          text: "Treatment cost depends on the grade of piles and procedure type. Our team assists with insurance documentation and pre-authorisation. Contact us for a personalised estimate.",
        },
      ],
    },
    {
      id: "when-to-see-doctor",
      heading: "When to See a Doctor",
      blocks: [
        {
          type: "paragraph",
          text: "Do not wait until piles become severe. Consult Dr. Satish Jadhav if you experience any of the following:",
        },
        {
          type: "list",
          items: [
            "Rectal bleeding lasting more than a few days",
            "A lump at the anus that does not go away",
            "Severe pain during bowel movements",
            "Piles that have not improved with home treatment",
            "Symptoms affecting your quality of life or work",
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "Sunrise Piles Hospital, Mankar Chowk, Wakad, Pune — NABH accredited laser proctology centre. Call +91 90969 65217 or book online.",
        },
      ],
    },
  ],

  "anal-fissure-causes-symptoms": [
    {
      id: "what-is-fissure",
      heading: "What Is an Anal Fissure?",
      blocks: [
        {
          type: "paragraph",
          text: "An anal fissure is a small tear in the thin, moist tissue (mucosa) lining the anus. It commonly causes sharp, burning pain during and after bowel movements, and may be accompanied by bright red blood on toilet paper.",
        },
        {
          type: "callout",
          variant: "info",
          text: "Many patients confuse fissures with piles. A specialist examination by Dr. Satish Jadhav ensures accurate diagnosis and the right treatment.",
        },
      ],
    },
    {
      id: "acute-vs-chronic",
      heading: "Acute vs Chronic Fissure",
      blocks: [
        {
          type: "subheading",
          text: "Acute Fissure",
        },
        {
          type: "paragraph",
          text: "Recent tears (less than 6–8 weeks) often heal with medical management — stool softeners, topical ointments, warm sitz baths, and dietary changes.",
        },
        {
          type: "subheading",
          text: "Chronic Fissure",
        },
        {
          type: "paragraph",
          text: "Long-standing fissures develop a skin tag (sentinel pile) and fail to heal due to persistent internal sphincter spasm. These usually require surgical or laser intervention.",
        },
      ],
    },
    {
      id: "symptoms",
      heading: "Symptoms of Anal Fissure",
      blocks: [
        {
          type: "list",
          items: [
            "Sharp, severe pain during bowel movements",
            "Burning or stinging pain lasting minutes to hours after stools",
            "Bright red blood on toilet paper",
            "Visible crack or tear near the anus",
            "Small skin tag or lump near the fissure",
            "Itching and irritation in the anal area",
            "Fear of passing stools due to anticipated pain",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          text: "Avoid delaying treatment — chronic fissures become harder to treat and significantly affect quality of life.",
        },
      ],
    },
    {
      id: "causes",
      heading: "Causes & Risk Factors",
      blocks: [
        {
          type: "list",
          items: [
            "Passing hard or large stools (constipation)",
            "Chronic diarrhoea",
            "Straining during bowel movements",
            "Low-fibre diet",
            "Childbirth and pregnancy",
            "Inflammatory bowel disease (Crohn's disease)",
            "Anal intercourse",
            "Previous anal surgery",
          ],
        },
      ],
    },
    {
      id: "treatment-options",
      heading: "Treatment Options at Sunrise Piles Hospital",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Medical Management",
              desc: "Topical anaesthetic ointments, calcium channel blockers, stool softeners, and high-fibre diet for acute fissures.",
            },
            {
              title: "Botulinum Toxin Injection",
              desc: "Relaxes the internal sphincter to reduce spasm and promote healing.",
            },
            {
              title: "Laser Sphincterotomy",
              desc: "Precise laser release of sphincter spasm — minimal pain, faster recovery, no stitches.",
            },
            {
              title: "Lateral Internal Sphincterotomy (LIS)",
              desc: "Gold-standard surgical option for chronic fissures resistant to medical treatment.",
            },
          ],
        },
      ],
    },
    {
      id: "when-surgery",
      heading: "When Do You Need Surgery?",
      blocks: [
        {
          type: "paragraph",
          text: "Surgery is recommended when conservative treatment fails after 6–8 weeks, or when the fissure is chronic with a sentinel pile. Dr. Jadhav will assess your condition and recommend the least invasive effective option.",
        },
        laserVsOpenTable,
      ],
    },
    {
      id: "recovery",
      heading: "Recovery After Fissure Treatment",
      blocks: [
        {
          type: "list",
          items: [
            "High-fibre diet and 8–10 glasses of water daily",
            "Warm sitz baths 2–3 times daily for comfort",
            "Avoid straining during bowel movements",
            "Return to desk work in 2–3 days after laser treatment",
            "Attend all follow-up appointments",
          ],
        },
      ],
    },
  ],

  "vaft-fistula-treatment": [
    {
      id: "what-is-fistula",
      heading: "What Is Anal Fistula?",
      blocks: [
        {
          type: "paragraph",
          text: "An anal fistula is an abnormal tunnel that forms between the inside of the anus and the skin near the anus, usually after an anal abscess. It causes persistent discharge, pain, and recurring infections.",
        },
        {
          type: "callout",
          variant: "info",
          text: "Fistulas rarely heal on their own. Proper surgical treatment by a specialist like Dr. Satish Jadhav is essential to prevent recurrence and protect the sphincter muscle.",
        },
      ],
    },
    {
      id: "symptoms",
      heading: "Symptoms of Anal Fistula",
      blocks: [
        {
          type: "list",
          items: [
            "Persistent or recurring discharge (pus or blood) near the anus",
            "Pain and swelling around the anus",
            "Skin irritation and itching",
            "Frequent anal abscesses",
            "Fever during active infection",
            "Pain during bowel movements",
          ],
        },
      ],
    },
    {
      id: "types",
      heading: "Types of Anal Fistula",
      blocks: [
        {
          type: "subheading",
          text: "Simple Fistula",
        },
        {
          type: "paragraph",
          text: "Superficial tracts involving minimal sphincter muscle — often treated with fistulotomy or laser fistulotomy.",
        },
        {
          type: "subheading",
          text: "Complex Fistula",
        },
        {
          type: "paragraph",
          text: "Deep or high tracts involving significant sphincter muscle — require sphincter-preserving techniques like VAAFT or LIFT procedure.",
        },
      ],
    },
    {
      id: "vaft",
      heading: "VAAFT — Video-Assisted Anal Fistula Treatment",
      blocks: [
        {
          type: "paragraph",
          text: "VAAFT is a minimally invasive, sphincter-preserving procedure using a miniature video fistuloscope to visualise and treat the fistula tract from inside. Dr. Satish Jadhav is trained in this advanced technique.",
        },
        {
          type: "list",
          items: [
            "Direct visualisation of the entire fistula tract",
            "Sphincter-preserving — low incontinence risk",
            "Low recurrence rate compared to conventional surgery",
            "Daycare procedure with faster recovery",
            "Suitable for complex and recurrent fistulas",
          ],
        },
      ],
    },
    {
      id: "treatment-options",
      heading: "All Treatment Options We Offer",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "VAAFT (Video-Assisted)",
              desc: "Gold-standard minimally invasive technique with video-guided treatment of the fistula tract.",
            },
            {
              title: "Laser Fistulotomy",
              desc: "Laser destroys the fistula lining with minimal damage to surrounding tissues.",
            },
            {
              title: "Fistulotomy / Fistulectomy",
              desc: "Surgical excision suitable for superficial, simple fistulas.",
            },
            {
              title: "LIFT Procedure",
              desc: "Ligation of Intersphincteric Fistula Tract — sphincter-preserving option for complex cases.",
            },
          ],
        },
      ],
    },
    {
      id: "recovery",
      heading: "Recovery & Aftercare",
      blocks: [
        {
          type: "list",
          items: [
            "Keep the area clean and dry",
            "Warm sitz baths as advised",
            "High-fibre diet to avoid constipation",
            "Complete prescribed antibiotics if given",
            "Follow-up visits to monitor healing",
          ],
        },
      ],
    },
  ],

  "laser-surgery-vs-open-surgery": [
    {
      id: "overview",
      heading: "Why Laser Surgery Has Replaced Open Surgery",
      blocks: [
        {
          type: "paragraph",
          text: "Open haemorrhoidectomy was the standard piles treatment for decades. Today, laser proctology offers a safer, faster, and less painful alternative — which is why Sunrise Piles Hospital specialises exclusively in laser and minimally invasive techniques.",
        },
      ],
    },
    {
      id: "comparison",
      heading: "Detailed Comparison: Laser vs Open Surgery",
      blocks: [laserVsOpenTable],
    },
    {
      id: "five-reasons",
      heading: "5 Reasons Patients Choose Laser Surgery",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "No Stitches",
              desc: "Laser energy shrinks tissue with minimal invasiveness. No open wounds to heal.",
            },
            {
              title: "Daycare Procedure",
              desc: "Completed in 15–45 minutes. Go home the same day — no overnight stay.",
            },
            {
              title: "Minimal Blood Loss",
              desc: "Laser coagulates blood vessels instantly — virtually bloodless procedure.",
            },
            {
              title: "Faster Recovery",
              desc: "Return to desk work in 2–3 days vs 2–3 weeks with open surgery.",
            },
            {
              title: "Less Post-Operative Pain",
              desc: "Significantly less discomfort — less dependence on pain medication.",
            },
          ],
        },
      ],
    },
    {
      id: "who-is-eligible",
      heading: "Who Is Eligible for Laser Surgery?",
      blocks: [
        {
          type: "list",
          items: [
            "Grade 2–4 internal and external piles",
            "Chronic anal fissures requiring sphincterotomy",
            "Anal fistulas (simple and complex with VAAFT)",
            "Patients seeking daycare, painless treatment",
            "Those who cannot afford long recovery from open surgery",
          ],
        },
        {
          type: "callout",
          variant: "info",
          text: "Dr. Satish Jadhav evaluates each patient individually. Book a consultation to know if laser surgery is right for you.",
        },
      ],
    },
  ],

  "diet-lifestyle-piles-prevention": [
    {
      id: "why-prevention",
      heading: "Why Prevention Matters After Treatment",
      blocks: [
        {
          type: "paragraph",
          text: "Successful piles treatment is only half the journey. Without lifestyle changes, recurrence is possible. Our specialists recommend these evidence-based habits for long-term relief.",
        },
      ],
    },
    {
      id: "high-fibre-diet",
      heading: "High-Fibre Diet Recommendations",
      blocks: [
        {
          type: "list",
          items: [
            "Eat 25–30 grams of fibre daily from vegetables, fruits, and whole grains",
            "Include leafy greens, beans, lentils, oats, and whole wheat",
            "Add fruits like papaya, banana, apple, and pear",
            "Increase fibre gradually to avoid bloating",
            "Limit processed foods, white bread, and refined flour",
          ],
        },
      ],
    },
    {
      id: "hydration",
      heading: "Hydration & Bowel Habits",
      blocks: [
        {
          type: "list",
          items: [
            "Drink 8–10 glasses of water daily",
            "Respond promptly to the urge to pass stools — do not delay",
            "Avoid straining or spending long periods on the toilet",
            "Establish a regular bowel routine",
            "Use stool softeners only as advised by your doctor",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          text: "Avoid long-term use of laxatives without medical supervision — they can worsen bowel dependency.",
        },
      ],
    },
    {
      id: "exercise",
      heading: "Exercise & Lifestyle",
      blocks: [
        {
          type: "list",
          items: [
            "Walk 30 minutes daily — improves bowel motility",
            "Avoid prolonged sitting — take breaks every hour",
            "Maintain healthy body weight",
            "Limit spicy, oily, and alcohol intake",
            "Manage stress — it can affect bowel habits",
          ],
        },
      ],
    },
    {
      id: "foods-to-avoid",
      heading: "Foods to Limit or Avoid",
      blocks: [
        {
          type: "list",
          items: [
            "Spicy and heavily seasoned food",
            "Deep-fried and oily snacks",
            "Excessive tea, coffee, and alcohol",
            "Red meat in large quantities",
            "Low-fibre fast food and packaged meals",
          ],
        },
      ],
    },
  ],

  "post-surgery-recovery-piles": [
    {
      id: "first-24-hours",
      heading: "First 24 Hours After Laser Treatment",
      blocks: [
        {
          type: "paragraph",
          text: "Most patients feel mild discomfort rather than severe pain after laser piles treatment. Rest at home, follow medication schedule, and avoid heavy activity on day one.",
        },
        {
          type: "list",
          items: [
            "Take prescribed pain relief and antibiotics on schedule",
            "Start with light, soft foods",
            "Take a warm sitz bath if advised",
            "Walk lightly at home — do not stay in bed all day",
            "Contact the hospital if bleeding is heavy or pain is severe",
          ],
        },
      ],
    },
    {
      id: "dos",
      heading: "Do's During Recovery",
      blocks: [
        {
          type: "list",
          items: [
            "Eat a high-fibre diet with plenty of water",
            "Take warm sitz baths 2–3 times daily",
            "Take all medications as prescribed",
            "Attend follow-up appointments with Dr. Jadhav",
            "Gradually return to normal activities",
            "Report any unusual symptoms promptly",
          ],
        },
      ],
    },
    {
      id: "donts",
      heading: "Don'ts During Recovery",
      blocks: [
        {
          type: "list",
          items: [
            "Do not lift heavy weights for 1–2 weeks",
            "Avoid strenuous exercise and cycling initially",
            "Do not strain during bowel movements",
            "Avoid spicy, oily, and alcohol for the first week",
            "Do not skip follow-up visits",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          text: "Contact Sunrise Piles Hospital immediately if you experience heavy bleeding, high fever, severe unrelieved pain, or signs of infection.",
        },
      ],
    },
    {
      id: "timeline",
      heading: "Recovery Timeline",
      blocks: [
        {
          type: "steps",
          items: [
            { title: "Day 0", desc: "Procedure completed. Discharge same day with instructions." },
            { title: "Days 1–2", desc: "Mild discomfort. Soft diet, sitz baths, light walking." },
            { title: "Days 2–3", desc: "Most patients return to desk work." },
            { title: "Week 1", desc: "Avoid heavy lifting. Continue fibre-rich diet." },
            { title: "Week 2–3", desc: "Full recovery for most patients. Follow-up check completed." },
          ],
        },
      ],
    },
    {
      id: "long-term",
      heading: "Long-Term Care to Prevent Recurrence",
      blocks: [
        {
          type: "paragraph",
          text: "Maintain high-fibre diet, adequate hydration, regular exercise, and healthy bowel habits. Annual check-ups are recommended if you have a history of piles.",
        },
      ],
    },
  ],
};

export const blogPosts: BlogPost[] = [
  {
    slug: "laser-treatment-for-piles",
    category: "Piles Treatment",
    date: "Jan 10, 2026",
    author: "Dr. Satish Jadhav",
    authorTitle: "MD, FPC, CCKS — Proctologist & Laser Surgeon",
    title: "Complete Guide to Piles Treatment in Pune – Laser vs Open Surgery",
    excerpt:
      "Laser haemorrhoidoplasty is now the gold standard for treating grade 2–4 piles. Learn what the procedure involves, recovery timeline, and why it's superior to conventional surgery.",
    readTime: "12 min read",
    sections: articleSections["laser-treatment-for-piles"],
  },
  {
    slug: "anal-fissure-causes-symptoms",
    category: "Fissure",
    date: "Dec 28, 2025",
    author: "Dr. Satish Jadhav",
    authorTitle: "MD, FPC, CCKS — Proctologist & Laser Surgeon",
    title: "Anal Fissure: Causes, Symptoms & When You Need Surgery",
    excerpt:
      "Anal fissures cause intense pain during bowel movements. Understand the difference between acute and chronic fissures, and find out when laser fissurectomy is the right choice.",
    readTime: "10 min read",
    sections: articleSections["anal-fissure-causes-symptoms"],
  },
  {
    slug: "vaft-fistula-treatment",
    category: "Fistula",
    date: "Dec 15, 2025",
    author: "Dr. Satish Jadhav",
    authorTitle: "MD, FPC, CCKS — Proctologist & Laser Surgeon",
    title: "VAAFT for Fistula in Ano: A Minimally Invasive Breakthrough",
    excerpt:
      "Video-Assisted Anal Fistula Treatment (VAAFT) allows surgeons to visualise and treat the fistula tract without damaging the sphincter. Discover why VAAFT offers 95%+ success rates.",
    readTime: "10 min read",
    sections: articleSections["vaft-fistula-treatment"],
  },
  {
    slug: "laser-surgery-vs-open-surgery",
    category: "Laser Surgery",
    date: "Nov 30, 2025",
    author: "Dr. Satish Jadhav",
    authorTitle: "MD, FPC, CCKS — Proctologist & Laser Surgeon",
    title: "5 Reasons Why Laser Surgery Is Better Than Open Surgery for Piles",
    excerpt:
      "Daycare procedure, minimal blood loss, zero stitches, and return to work in 2–3 days — explore why thousands of patients in Pune prefer laser surgery at Sunrise Piles Hospital.",
    readTime: "8 min read",
    sections: articleSections["laser-surgery-vs-open-surgery"],
  },
  {
    slug: "diet-lifestyle-piles-prevention",
    category: "Diet & Lifestyle",
    date: "Nov 14, 2025",
    author: "Dr. Satish Jadhav",
    authorTitle: "MD, FPC, CCKS — Proctologist & Laser Surgeon",
    title: "Diet & Lifestyle Changes That Prevent Piles Recurrence",
    excerpt:
      "High-fibre diet, adequate hydration, and healthy bowel habits can dramatically reduce the risk of piles recurrence after treatment. Here's a complete guide from our specialists.",
    readTime: "8 min read",
    sections: articleSections["diet-lifestyle-piles-prevention"],
  },
  {
    slug: "post-surgery-recovery-piles",
    category: "Recovery",
    date: "Oct 22, 2025",
    author: "Dr. Satish Jadhav",
    authorTitle: "MD, FPC, CCKS — Proctologist & Laser Surgeon",
    title: "Post-Surgery Recovery: Do's & Don'ts After Laser Piles Treatment",
    excerpt:
      "Proper post-operative care is key to a quick and complication-free recovery. Learn about diet, activity restrictions, wound care, and what symptoms need immediate attention.",
    readTime: "9 min read",
    sections: articleSections["post-surgery-recovery-piles"],
  },
];

export const blogCategories = [
  { name: "Piles Treatment" as const, count: 1 },
  { name: "Fissure" as const, count: 1 },
  { name: "Fistula" as const, count: 1 },
  { name: "Laser Surgery" as const, count: 1 },
  { name: "Diet & Lifestyle" as const, count: 1 },
  { name: "Recovery" as const, count: 1 },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
