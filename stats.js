const ctx = document.getElementById('spendingChart');
const spendingData = [300, 150, 250, 150];
const totalSpent = spendingData.reduce((a, b) => a + b, 0);

// Show total
document.getElementById("totalSpent").textContent = `Total Spent: $${totalSpent}`;

new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['🍕 Food', '🚗 Transport', '🛍️ Shopping', '💡 Bills'],
    datasets: [{
      data: spendingData,
      backgroundColor: ['#4caf50', '#2196f3', '#ff9800', '#e91e63'],
      hoverOffset: 10
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 14
          }
        }
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || '';
            const value = context.parsed;
            return `${label}: $${value}`;
          }
        }
      }
    }
  }
});
