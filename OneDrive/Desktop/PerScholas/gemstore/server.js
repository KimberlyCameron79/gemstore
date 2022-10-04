const express = import('express');


const mongoConfig = import('./config')

const PORT = process.env.PORT || 3000;

const app = express()

// dotenv.config();
// connectDatabase();

app.use(express.json());


app.get("/", (req, res) => {
    res.send("API is running....")
})





//API
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);


app.listen(PORT, console.log(`server run in port ${PORT}`));