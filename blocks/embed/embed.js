export default function decorate(block) {
  const url = Array.from(block.children);
  const embedUrl = url[0].innerText.split('/')[5];

  const embedHTML = `<iframe src="https://drive.google.com/file/d/${embedUrl}/preview" 
      style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" 
      frameborder="0" allow="autoplay; fullscreen; picture-in-picture"  
      title="Content from MS Stream" loading="lazy"></iframe>`;

  block.innerHTML = '';
  const embedStream = document.createElement('div');
  embedStream.className = 'embed-stream';
  block.append(embedStream);
  embedStream.innerHTML = embedHTML;
}
