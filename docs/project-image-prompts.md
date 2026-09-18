# Project use-case image prompts

Generated with the built-in image_gen tool on 2026-09-18. Each image was generated separately and visually reviewed. The images are conceptual use-case illustrations, not product screenshots or measured results.

All deliverables are 1536 x 1024 WebP files in public/images/projects/. The generated PNGs were encoded to WebP at quality 85 without cropping, resizing, or changing the artwork. Each file uses the project slug plus -use-case.webp. Alt text, dimensions and captions live in src/data/projects.ts.

## Source analysis

- Kamour Sales OS: reviewed docs/astra-prompt.md and the earlier design brief in the project repository. The current brief emphasizes shared customer records, actionable leads and continuity from doctor consultation to order and follow-up. The illustration omits internal volumes and real customer data.
- Kredo: reviewed app/page.tsx and the repository README, alongside the portfolio project notes. The entry route uses an authenticated profile and shared lead, consultation and task stores. The illustration emphasizes customer context and the next action.
- PMS vs PC: reviewed README_DEPLOY.md in pms-pc-dashboard. It documents browser -> Vercel API route -> Apps Script -> Google Sheets. The image shows shared spreadsheet data and comparative leadership reporting, without inventing metrics.
- Daily Settlements Update: reviewed README.md in Daily-Settlements-Update-. It describes a responsive HTML/CSS/JavaScript dashboard using Google Sheets and Apps Script, with trends, date reports and automatic updates.
- Smart Mall AI: reviewed README.md in ai-mall-attendance. YOLOv8n detects people, ByteTrack tracks them, a virtual line counts direction, and FastAPI/MJPEG plus SQLite supply the dashboard and event records. The image uses full-body tracking boxes, not identity recognition.
- Plant Health AI: reviewed README.md in Plant-Health-AI. MobileNetV2 supports 27 classes across six crops with Hindi/English access. The image presents a leaf-photo classification use case without treatment or accuracy claims.

## Exact generation prompts

### kamour-sales-os

Use case: illustration-story
Asset type: original raster use-case illustration for the Kamour Sales OS project on a personal portfolio, wide landscape 3:2 composition.
Primary request: explain how a healthcare sales CRM keeps a customer connected from first contact through consultation, order and follow-up. Create a premium editorial technical illustration, NOT a screenshot.
Scene and composition: a calm, beautifully ordered sales workstation seen in three-quarter cutaway perspective. A central large dimensional customer-record card with a generic anonymous avatar acts as the connected hub. Arrange four distinct tangible vignettes around it: an incoming contact shown by a phone and contact card; a doctor consultation shown by a seated doctor, discreet consultation scene and prescription clipboard with abstract lines; a checked payment slip beside a small shipping parcel; a follow-up calendar and phone. Fine confident teal data paths connect every vignette through the central customer record and a visible looping path returns from follow-up toward the initial record. Emphasize a continuous unbroken connection from consultation to follow-up, so nobody is lost between them. Tiny physical card details can suggest role access and activity history, with no legible personal data.
Art direction: premium editorial technical illustration combining a tangible real-world scene and floating schematic connections, subtle dimensional cutaway rendering, crisp detail, tactile off-white paper and matte slate objects, deep charcoal ink outlines, restrained teal #0d7a70 accents. Cool slate/off-white background, gentle grounded shadows, quiet light, generous negative space, clear enough at thumbnail scale.
Text: only four small typeset labels "CONTACT", "CONSULT", "ORDER", "FOLLOW UP", located beside their corresponding vignette. No other words.
Constraints: concept art, not a fabricated product screenshot. No real names, patient details, metrics, medical outcomes, wellness claims, logos, watermark, robots, title banner, dense labels or stock blue/purple gradients. Make the shared customer record and connected cycle visually clear.

### kredo

Use case: illustration-story
Asset type: original raster use-case illustration for the Kredo CRM project on a personal portfolio, landscape 3:2.
Primary request: explain a shared CRM workspace where a team keeps customer relationships moving by organizing leads and making the next action clear. Premium editorial technical illustration, not a product screenshot.
Scene and composition: elevated oblique view of a real collaborative sales desk. The main visual is an orderly long horizontal pipeline made of three shallow physical slate trays, each holding a few upright anonymous contact cards. A selected card emerges larger in the foreground, elegantly connected by thin teal paths to three useful objects: a standing task calendar with one marked date and a check box, layered conversation-history cards with simple abstract speech shapes and tiny abstract lines, and three modest coworker avatar cards standing together. The pipeline progresses left-to-right; a clear path leads from the selected contact toward the calendar as the next action. A laptop in the rear quietly grounds the scene but shows only abstract shapes. Two team members' hands can arrange contact cards naturally from opposite desk edges. Focus on shared information, task ownership and relationship continuity, no metrics.
Style: premium editorial technical illustration combining tangible real-world scene and floating schematic data connections; subtle dimensional cutaway rendering, crisp detail, tactile off-white paper and matte slate materials, deep charcoal ink contours, restrained teal #0d7a70 highlights. Cool slate/off-white background with gentle grounded shadows and quiet studio daylight. Strong visual hierarchy and generous breathing room, readable as a thumbnail. Make this a horizontal shared pipeline desk composition, not a circular hub.
Text: only three small labels "PIPELINE", "NEXT ACTION", "HISTORY", placed next to corresponding objects. No other text.
Constraints: conceptual illustration, NOT a fabricated app screenshot. No real names, private data, outcome metrics, financial claims, AI agents, robots, big titles, logos, watermark, dense labels, stock blue/purple gradients or decorative glowing neon. Show the value of orderly follow-through using only customer records, tasks, history and collaboration.

### PMS vs PC Intelligence Dashboard

Use case: productivity-visual.
Asset type: portfolio project use-case cover illustration, landscape 3:2.
Primary request: Explain visually how a PMS vs PC Intelligence Dashboard turns shared daily spreadsheet records into actionable comparative reporting for leadership. This is a conceptual illustration, never an actual app screenshot.
Scene: a refined small leadership meeting at an understated charcoal desk, three simplified professional people seen in three-quarter view reviewing one large central screen. On the screen are two equal-size comparative chart panels with balanced bar and line shapes, clear side-by-side comparison, no numbers and no claims of growth. A tangible spreadsheet sheet in foreground supplies a thin teal data connection through a small bridge module to the central dashboard. Around it, three discreet small reporting perspectives branch toward the people; communicate role-specific CEO, COO and HR views without tiny text. Keep the shared sheet -> Apps Script sync bridge -> browser dashboard relationship visually legible, with no cloud database imagery.
Style: premium editorial technical illustration, tangible architectural model quality, subtle dimensional cutaway rendering, crisp charcoal ink edges, off-white and cool slate background with restrained teal #0d7a70 accents, soft studio shadows, sophisticated material texture.
Composition: generous breathing room, one coherent scene, wide landscape 3:2, instantly readable at portfolio thumbnail size. Main dashboard dominant, people secondary, data connection subtle but clear.
Text: only two short labels on the comparative panels, exactly "PMS" and "PC"; no other text.
Constraints: depict daily sales and patient-performance comparisons abstractly, no names, figures or patient records. No fabricated metrics/results, no upward-only performance claims, no Supabase symbol, no invented features. No stock blue or purple gradients, robots, title banners, logos, watermarks, dense tiny text or overly busy wireframe diagram.

### Daily Settlements Update

Use case: productivity-visual.
Asset type: portfolio project use-case cover illustration, wide landscape 3:2.
Primary request: Visualize Daily Settlements Update, a lightweight responsive sales reporting dashboard that retrieves Google Sheets data through Apps Script and shows business metrics, trends and date-based reports. A conceptual illustration of the use case, not an actual software screenshot.
Scene: an elegant overhead three-quarter studio view of a compact work desk. On the left, several tangible off-white spreadsheet pages fan outward, with many small organized teal and charcoal rows but no numbers or words. A single fine teal connection flows from the sheets through a small quiet code-bridge tile at center into a desktop monitor on the right and a matching smartphone in front. The desktop and phone display the same abstract trend reporting in appropriate desktop and narrow responsive layouts: simple metric blocks without values, balanced rising and falling trend lines, a compact calendar grid with one date visibly selected but no date numerals. This should clearly tell the story of a mass of spreadsheet rows becoming focused daily reports usable on any screen.
Style/medium: premium editorial technical illustration combining tangible material realism and subtle dimensional architectural-model rendering; crisp charcoal edges, soft studio shadows, restrained high-end desk objects, cool slate and off-white background, deep charcoal ink, restrained teal #0d7a70 highlights. No people or meeting room. Keep the paper -> script bridge -> browser desktop/mobile relationship readable at small sizes.
Composition: polished generous breathing room, diagonal flow left to right, single coherent scene, 3:2 landscape framing.
Text: no text except a tiny simple </> mark on the code bridge.
Constraints: no numerical data, no fabricated metrics or results, no upward-only performance claims, no invented notification features or payment transaction claims. No logos, no title banner, no watermarks, no robots, no blue or purple gradient background, no illegible dense text. Smartphone and desktop chart forms should be visibly related.

### Smart Mall AI

Use case: scientific-educational
Asset type: conceptual use-case illustration for a technical portfolio project, wide landscape 3:2.
Primary request: Illustrate Smart Mall AI people counting, clearly showing how anonymous shopper movement becomes directional entry/exit events.
Scene: An oblique, dimensional cutaway of a modern shopping mall entrance on a pale off-white/slate ground. Several natural, anonymous full-body shoppers walk through the entrance. Carefully aligned thin teal rectangular detection boxes surround individual full bodies. One clean virtual counting line spans the entrance floor, with two simple opposite-direction arrows showing entry and exit.
Composition: The mall entrance is the dominant tangible scene, with a compact floating generic monitoring screen and a slim event-log card connected by restrained schematic lines on the right. The screen echoes the entrance with tiny person rectangles; the event card uses abstract rows without numerical metrics or personal data. Strong visual hierarchy, legible at thumbnail size.
Technical fidelity: Webcam/video/RTSP input is analyzed by YOLOv8n person detection, then ByteTrack persistent anonymous tracking, then virtual-line crossing and directional counting, served through FastAPI MJPEG/live dashboard and timestamped SQLite events. Communicate this through scene and connections, not dense text. This is a concept illustration, never a screenshot or claimed real dashboard.
Style: premium editorial technical illustration with tactile architectural model materials, subtle dimensional cutaway rendering, crisp restrained detail, realistic natural clothing, no decorative robots. Deep charcoal ink, slate and off-white, restrained teal accents matching #0d7a70. Soft neutral studio light, no stock gradients.
Text: At most the short labels "Entry", "Exit", and "Event log" in small clean type. No title banner, no logos, no dense text, no fabricated metrics, no biometrics, no face recognition, no face boxes, no surveillance-camera array, no watermarks.

### Plant Health AI

Use case: scientific-educational
Asset type: conceptual use-case illustration for a technical portfolio project, wide landscape 3:2.
Primary request: Show Plant Health AI turning a farmer's photograph of a crop leaf into a readable crop disease classification, with a clear image-analysis path.
Scene: A close, tangible field-side arrangement of textured crop leaves on a pale off-white/slate ground, with soft out-of-focus crop rows suggested in the distance. A healthy green leaf and a clearly spotted crop leaf create the central comparison. A natural farmer's hand holds a modern unbranded smartphone showing the spotted leaf photo being submitted, not a fake real application screenshot.
Composition: The real leaves and hand-held phone dominate the left and center. On the right, a subtle floating translucent image-analysis tile with an enlarged leaf patch connects by a thin teal line to a generic restrained result card. The card contains a small crop-leaf thumbnail and abstract text rows, communicating classification rather than certainty. Strong thumbnail-readable silhouette, generous breathing room.
Technical fidelity: Python MobileNetV2 crop disease classifier with 27 classes across cotton, rice, maize, tomato, potato and pepper; farmer-friendly Hindi/English UI. Show image to classification concept only. Do not depict diagnosis certainty, treatment prescriptions, spraying instructions, guaranteed yield gains, offline operation or other unverified features.
Style: premium editorial technical illustration combining realistic tactile botanical surfaces and restrained dimensional schematic cutaways. Deep charcoal ink, slate and off-white, teal structural accents matching #0d7a70, natural greens and leaf-spot browns. Soft neutral natural light, crisp purposeful detail. Coherent modern engineering portfolio art.
Text: only the short functional labels "Leaf image" and "Classification" if needed; no title banners, no fabricated probabilities or metrics, no logos, no dense text, no decorative robots, no stock gradients, no personal data, no watermark. This is a conceptual illustration, not a screenshot.
