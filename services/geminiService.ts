
import { GoogleGenAI, Type } from "@google/genai";
import { RecommendationRequest, RecommendationResponse } from "../types";

export const getEducationCounseling = async (data: RecommendationRequest): Promise<RecommendationResponse> => {
  // Move GoogleGenAI initialization inside the function to follow best practices for up-to-date API key usage.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const prompt = `Act as an expert overseas education consultant at Edwise International. 
  A student wants advice for studying abroad.
  Background: ${data.background}
  Interests: ${data.interest}
  Budget Range: ${data.budget}
  Preferred Countries: ${data.preferredCountries.join(", ")}

  Provide a structured recommendation for their higher education path.`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          advice: { type: Type.STRING, description: "Detailed counseling advice for the student." },
          topDestinations: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                country: { type: Type.STRING },
                reason: { type: Type.STRING }
              },
              required: ["country", "reason"]
            }
          },
          suggestedCourses: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                course: { type: Type.STRING },
                universities: { type: Type.ARRAY, items: { type: Type.STRING } }
              },
              required: ["course", "universities"]
            }
          }
        },
        required: ["advice", "topDestinations", "suggestedCourses"]
      }
    }
  });

  try {
    return JSON.parse(response.text || "{}");
  } catch (error) {
    console.error("Failed to parse Gemini response", error);
    throw new Error("Consultation failed. Please try again.");
  }
};
