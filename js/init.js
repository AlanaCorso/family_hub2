// ============================
// INIT
// ============================
async function init() {
  await loadAll();
  renderPage('dashboard');
  checkNotificacoes();
  // Verifica notificações a cada 30s
  setInterval(checkNotificacoes, 30000);
}

async function loadAll() {
  try {
    const [membros, stats] = await Promise.all([
      api('GET', '/membros'),
      api('GET', '/stats'),
    ]);
    state.membros = membros || [];
    state.stats = stats || {};
  } catch(e) {
    toast('Erro ao conectar com o servidor. Verifique se ele está rodando.', 'error');
  }
}