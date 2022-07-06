// import fetch from "node-fetch";

const API =
  "https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=PLTlQ5e4XDp2u7XnXfsShkp4J0lzRZBw9S&part=snippet&maxResults=50";

const content = null || document.getElementById('content');

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2107e6ec35msh8bb6a4af03fe584p148688jsn538dbe55a674",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

async function fetchData(urlAPI) {
  const response = await fetch(urlAPI, options);
  const data = await response.json();
  return data;
}

(async () => {
	try {
		const videos = await fetchData(API);
		let view = `
		${videos.items.map(video => `
		<div class="group relative">
            <div
              class="w-full bg-neutral-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
            >
              <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full" />
            </div>
            <div class="mt-4 flex justify-between">
              <h3 class="text-sm text-neutral-400">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
              </h3>
            </div>
          </div>
		`).slice(0,4).join('')}
		`;
		console.log(content);
		content.innerHTML = view;
	} catch (error) {
		console.log(error);
	}
})();
