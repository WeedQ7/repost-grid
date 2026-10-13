const result = document.getElementById('result');
document.getElementById('check').addEventListener('click', () => {
  const info = {
    page: location.href,
    secureContext: window.isSecureContext,
    serviceWorkerSupported: 'serviceWorker' in navigator,
    note: [
      'Эта страница не может читать cookies или авторизацию другого сайта.',
      'Обычная веб-страница не может надёжно запросить закрытый список репостов TikTok из другой вкладки из-за изоляции сайтов (Same-Origin Policy).',
      'Это не проверка доступа к репостам: для неё нужен отдельный безопасный способ выполнить запрос внутри авторизованного контекста TikTok.',
      'Никакие запросы на удаление не отправляются.'
    ]
  };
  result.textContent = JSON.stringify(info, null, 2);
});