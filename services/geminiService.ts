import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY not found in environment");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateDrinkRecommendation = async (mood: string): Promise<string> => {
  const client = getClient();
  if (!client) return "Our mixologists are offline (Check API Key). Try the 'Green Goddess' in the meantime!";

  try {
    const response = await client.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `You are a hip, knowledgeable bartender at 'Green House Social Juice Bar', a high-end lounge that serves ONLY fresh fruit juices, NO POWDERS, and NO ALCOHOL.
      
      The customer's current vibe is: "${mood}".
      
      Recommend a unique, creative juice blend for them. 
      Give it a cool name.
      List 3 key ingredients (must be real fruit/veg/herbs).
      Keep the tone social, exclusive, and fun. Max 40 words.`,
    });

    return response.text || "Try our signature Strawberry Lemonade Thirst Quencher!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The vibes are mysterious today. Ask our staff for a surprise blend!";
  }
};