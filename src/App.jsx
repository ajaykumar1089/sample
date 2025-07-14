import React from "react";
// import classes from "./home.module.css";
// import About from "../about/About";

import TopViewBeachImage from "./assets/hero.png";
import background from "./assets/background.jpg"; // Replace with your image URL

const Home = () => {
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      padding: "0",
      margin: "0",
      backgroundColor: "lightgray",
    },
    header: {
      backgroundColor: "#2c3e50",
      color: "#fff",
      padding: "20px 0",
      textAlign: "center",
      fontSize: "2rem",
    },
    hero: {
      backgroundImage: `url(${background})`, // Replace with your image URL
      height: "600px",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "black",
      fontSize: "2.5rem",
      fontWeight: "bold",
    },
    section: {
      padding: "40px 20px",
      textAlign: "center",
    },
    cardContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
    },
    card: {
      backgroundColor: "white",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      borderRadius: "10px",
      width: "300px",
      overflow: "hidden",
    },
    cardImage: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
    },
    cardContent: {
      padding: "20px",
    },
    button: {
      backgroundColor: "#3498db",
      color: "white",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };
  return (
    <div>
      <header>
        <header style={styles.header}>Welcome to Traveller Clicks</header>
      </header>
      <main>

        {/* <p>Book comfortable rides, explore new destinations, and enjoy hassle-free travel with Traveller Clicks. Your journey starts with just one click!</p> */}
        {/* <img src={TopViewBeachImage} alt="" height={410} width={1328} /> */}
        <div style={styles.container}>
          <div style={styles.hero}></div>          
          <section style={styles.section}>
            <h2>Popular Destinations</h2>
            <div style={styles.cardContainer}>
              {myArray.map((item, index) => (
                <div key={index} style={styles.card}>
                  <img src={require('./assets/' + item.image + '.jpg')}
                    style={styles.cardImage} alt={item.title} height={430} width={1330} />
                  <div style={styles.cardContent}>
                    <h3>{item.image}</h3>
                    <p>Discover the best places in {item.image} for your next adventure.</p>
                    <button style={styles.button}>Book Now</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

const myArray = [
  {
    number: 1,
    title: 'Users',
    image: 'bengal',
  },
  {
    number: 2,
    title: 'Clients',
    image: 'jharkhand',
  },
  {
    number: 3,
    title: 'Admin',
    image: 'odisha',
  },
    {
    number: 4,
    title: 'Admin',
    image: 'bihar',
  },
]
export default Home;