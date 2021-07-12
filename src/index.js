import express from "express"
import request from "request"

const app = express()
const PORT = 8080

app.get("/", (req, res) => {
  const brokerUrl = "https://ceh-broker-stocktrader-rs.devops-dev1-a01ee4194ed985a1e32b1d96fd4ae346-0000.us-east.containers.appdomain.cloud/broker/"
  const JWT = "eyJraWQiOiJWeUltUHBWVG1RY0ZfeV9SdVdHZmh1YkRGd1cxYjQ1d3FOQU1mUWZmV3hBIiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYifQ.eyJ0b2tlbl90eXBlIjoiQmVhcmVyIiwiYXVkIjoic3RvY2stdHJhZGVyIiwic3ViIjoic3RvY2siLCJ1cG4iOiJzdG9jayIsImdyb3VwcyI6WyJTdG9ja1RyYWRlciJdLCJyZWFsbSI6IkJhc2ljUmVnaXN0cnkiLCJpc3MiOiJodHRwOi8vc3RvY2stdHJhZGVyLmlibS5jb20iLCJleHAiOjE2MjU1NDE0MzEsImlhdCI6MTYyNTUzNDIzMX0.kVeNFZJtc41okWwYvkDBWiCLb8BDedmqBWvC2xzJogalZfH8GdzFlYEsaVVotWILl5YyLC3LnVOt-TgAc2sovFnnDP2ReEnqq1TrqgVpcxITBWLMiSvogS-uzRd1E3Is9ZnaK6shfkYsXTDL7eDabt-HK_6h29zrjr1IFv1yylOZIbp5713OmbmFtuHYQLx2yNcJg3rfRu4Cx8CtKtJQzWWRuJbz0gJjkkQqfwxtu2dj_cZnPVjUytyp3l3UNXDZeXsFFA2B2mKxrLxOdjJN27yixsEoQqYbKfoIaoUN6J-E7s-rjCnD1yhvAbNBQIIpAYSLPZMxTsXifYOV9_fYOw"
  request({
    method: "GET",
    url: brokerUrl,
    headers: {
        Authorization: `Bearer ${JWT}`,
    }
  }, (err, response, body) => {
    if (err) { return console.log(err); }
    res.header({
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    })
    res.send(body)
  });
})

app.listen(PORT, () => {
  console.log(`Server listening on localhost:${PORT}`)
})