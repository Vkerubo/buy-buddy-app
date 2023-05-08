function Home() {
  return (
    <div style={{ position: "relative" }}>
      <h1
        style={{ position: "absolute", top: "20px", left: "20px", zIndex: "1" }}
      >
        Welcome to Buy-Buddy...
      </h1>
      <p
        style={{
          position: "absolute",
          top: "100px",
          left: "20px",
          zIndex: "1",
          fontWeight: "bold",
          fontStyle: "italic",
        }}
      >
        Shop To Your Hearts Content :*){" "}
      </p>
      <img
        src="https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg"
        alt="happy woman with shopping bags"
        style={{ width: "99%", height: "auto" }}
      />
    </div>
  );
}
export default Home;
