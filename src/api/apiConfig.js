const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'e2b456f747af8a2018398b88574f412b',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;