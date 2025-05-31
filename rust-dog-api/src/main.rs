use reqwest;
use serde::Deserialize;

#[derive(Deserialize)]
struct DogResponse {
    message: String,
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let url = "https://dog.ceo/api/breeds/image/random";
    let response = reqwest::get(url).await?.json::<DogResponse>().await?;
    println!("🐶 Here's your dog: {}", response.message);
    Ok(())
}
