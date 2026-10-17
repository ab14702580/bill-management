import { connect, db, client } from './connection.js';

const dummyBills = [
  {
    title: "DESCO Electricity Bill - October",
    category: "Electricity",
    location: "Mirpur-10, Dhaka",
    date: "2026-10-15",
    amount: 1450,
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop&q=60",
    description: "Monthly residential electricity bill for DESCO pre-paid/post-paid meter."
  },
  {
    title: "DPDC Power Bill - October",
    category: "Electricity",
    location: "Dhanmondi, Dhaka",
    date: "2026-10-12",
    amount: 2150,
    image: "https://images.unsplash.com/photo-1544724559-5629d1c3b526?w=800&auto=format&fit=crop&q=60",
    description: "Commercial and residential electric utility supply by DPDC."
  },
  {
    title: "Titas Gas Monthly Bill",
    category: "Gas",
    location: "Uttara Sector 7, Dhaka",
    date: "2026-10-08",
    amount: 1080,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=60",
    description: "Domestic double burner pipeline gas bill payment."
  },
  {
    title: "Dhaka WASA Water Supply Bill",
    category: "Water",
    location: "Mohammadpur, Dhaka",
    date: "2026-10-10",
    amount: 850,
    image: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=800&auto=format&fit=crop&q=60",
    description: "Water and sewerage connection monthly bill provided by DWASA."
  },
  {
    title: "Carnival High Speed Internet Bill",
    category: "Internet",
    location: "Banani, Dhaka",
    date: "2026-10-05",
    amount: 1200,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=60",
    description: "50 Mbps unlimited fiber optic broadband home connection."
  },
  {
    title: "Link3 Technologies Fiber Bill",
    category: "Internet",
    location: "Gulshan-1, Dhaka",
    date: "2026-10-14",
    amount: 1500,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=60",
    description: "High performance broadband internet package with bufferless streaming."
  },
  {
    title: "NESCO Electricity Supply Bill",
    category: "Electricity",
    location: "Rajshahi Sadar, Rajshahi",
    date: "2026-10-11",
    amount: 1320,
    image: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?w=800&auto=format&fit=crop&q=60",
    description: "Northern Electricity Supply Company residential connection bill."
  },
  {
    title: "Chattogram WASA Water Bill",
    category: "Water",
    location: "Panchlaish, Chattogram",
    date: "2026-10-09",
    amount: 670,
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=60",
    description: "Monthly pure drinking water and domestic supply charge."
  },
  {
    title: "Dot Internet Broadband Bill",
    category: "Internet",
    location: "Khilgaon, Dhaka",
    date: "2026-10-16",
    amount: 1000,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=60",
    description: "Fast fiber optic home internet package with BDIX connectivity."
  }
];

async function seed() {
  try {
    await connect();
    const billsCollection = db.collection('bills');

    // Clean existing bills or append
    await billsCollection.deleteMany({});
    const result = await billsCollection.insertMany(dummyBills);
    console.log(`Successfully seeded ${result.insertedCount} bills into the 'bills' collection!`);
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await client.close();
    process.exit(0);
  }
}

seed();

