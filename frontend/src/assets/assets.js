import titleScreen from './Hospital-Pharmacy.jpg'
import pharmacyLogo from './phar.png'
import medicinLogo from './med.png'
import Paracetamol from './Paracetamol.JPG'
import Ibuprofen from './Ibuprofen.JPG'
import Amoxicillin from './Amoxicillin.JPG'
import Aspirin from './Aspirin.JPG'
import Cetirizine from './Cetirizine.JPG'
import Metformin from './Metformin.JPG'
import Omeprazole from './Omeprazole.JPG'
import Atorvastatin from './Atorvastatin.JPG'
import Losartan from './Losartan.JPG'
import Levothyroxine from './Levothyroxine.JPG'
import imgLogo from './imgLogo.png'
import pharmacorelogo from './pharmacorelogo.png'

const medicineData = [
    {
        "id": 1,
        "name": "Paracetamol",
        "price": 150,  // Price in INR
        "description": "Paracetamol is a common pain relief medication used to treat headaches, muscle pain, and fever.",
        "image": {
            "url": Paracetamol,
            "alt": "Paracetamol"
        }
    },
    {
        "id": 2,
        "name": "Ibuprofen",
        "price": 200,  // Price in INR
        "description": "Ibuprofen is an anti-inflammatory drug commonly used to reduce fever, pain, and inflammation.",
        "image": {
            "url": Ibuprofen,
            "alt": "Ibuprofen"
        }
    },
    {
        "id": 3,
        "name": "Amoxicillin",
        "price": 350,  // Price in INR
        "description": "Amoxicillin is an antibiotic used to treat a wide variety of bacterial infections.",
        "image": {
            "url": Amoxicillin,
            "alt": "Amoxicillin"
        }
    },
    {
        "id": 4,
        "name": "Aspirin",
        "price": 120,  // Price in INR
      "description": "Aspirin is a salicylate used to reduce pain, fever, or inflammation. It is also commonly used as a blood thinner.",
      "image": {
          "url": Aspirin,
          "alt": "Aspirin"
        }
    },
    {
        "id": 5,
        "name": "Cetirizine",
        "price": 180,  // Price in INR
        "description": "Cetirizine is an antihistamine used to relieve allergy symptoms such as watery eyes, runny nose, and sneezing.",
        "image": {
            "url": Cetirizine,
            "alt": "Cetirizine"
        }
    },
    {
        "id": 6,
        "name": "Metformin",
        "price": 400,  // Price in INR
        "description": "Metformin is a prescription medication used to control high blood sugar in people with type 2 diabetes.",
        "image": {
            "url": Metformin,
            "alt": "Metformin"
        }
    },
    {
        "id": 7,
        "name": "Omeprazole",
        "price": 250,  // Price in INR
        "description": "Omeprazole is a proton pump inhibitor used to treat symptoms of gastroesophageal reflux disease (GERD).",
        "image": {
        "url": Omeprazole,
        "alt": "Omeprazole"
    }
},
{
    "id": 8,
    "name": "Atorvastatin",
    "price": 500,  // Price in INR
    "description": "Atorvastatin is a statin used to lower cholesterol and reduce the risk of heart disease.",
    "image": {
        "url": Atorvastatin,
        "alt": "Atorvastatin"
    }
},
{
    "id": 9,
    "name": "Losartan",
    "price": 300,  // Price in INR
    "description": "Losartan is used to treat high blood pressure and protect the kidneys in people with diabetes.",
    "image": {
        "url": Losartan,
        "alt": "Losartan"
    }
},
{
    "id": 10,
      "name": "Levothyroxine",
      "price": 450,  // Price in INR
      "description": "Levothyroxine is used to treat an underactive thyroid (hypothyroidism).",
      "image": {
          "url": Levothyroxine,
          "alt": "Levothyroxine"
        }
    }
];
export const assets = {
    titleScreen,
    pharmacyLogo,
    medicinLogo,
    medicineData,
    imgLogo,
    pharmacorelogo
}