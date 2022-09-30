import { useRouter } from "next/router";
import React from "react";
import { Avatar, Button, TextField } from "@mui/material";

export default function Index({ time }) {
    const router = useRouter();
    console.log("router.pathname", router.pathname);
    return (
        <>
            <h1 className="text-warning mt-5" style={{ textAlign: "center" }}>
                帳號登入
            </h1>
            <div className="d-flex flex-column align-items-center p-5">
                <TextField id="outlined-basic" label="帳號名稱" variant="outlined" sx={{ background: "white", maxWidth: "150px" }} />
                <TextField id="outlined-basic" label="密碼" variant="outlined" sx={{ background: "white", maxWidth: "150px", marginY: "30px" }} type="password" />
                <Button className="mx-5 btn-lg" variant="contained" style={{ padding: "10px 40px" }} onClick={() => router.push("/")}>
                    登入
                </Button>
            </div>
        </>
    );
}

export async function getServerSideProps({ req, res }) {
    res.setHeader("Cache-Control", "public, s-maxage=100, stale-while-revalidate=590");

    return {
        props: {
            time: new Date().toISOString(),
        },
    };
}
