<script>
    let text = '';
    let entries = [];
  
    function handleSubmit() {
      const now = new Date();
      const timestamp = now.toLocaleString();
      entries = [...entries, { text, timestamp }];
      text = '';
      setTimeout(() => {
        entries = entries.filter((entry) => entry.timestamp !== timestamp);
      }, 30 * 60 * 1000);
    }
  </script>

  <svelte:head>
    <title>My journal - shucks</title>
  </svelte:head>
  
  <main>
    <div class="container">
      <div class="textarea-container">
        <textarea bind:value={text} rows="5" placeholder="Write your thoughts..." />
        <button on:click={handleSubmit}>Submit</button>
      </div>
  
      {#if entries.length === 0}
        <p>No entries yet.</p>
      {:else}
        <div class="entries">
          {#each entries as entry (entry.timestamp)}
            <div class="entry">
              <p>{entry.text}</p>
              <p>{entry.timestamp}</p>
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </main>
  
  <style>
    main {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f2f2f2;
      font-family: Arial, sans-serif;
    }
  
    .container {
      text-align: center;
    }
  
    .textarea-container {
      margin-bottom: 10px;
    }
  
    textarea {
      width: 100%;
      max-width: 400px;
      padding: 10px;
      border-radius: 4px;
      border: 1px solid #ccc;
      resize: vertical;
      font-size: 16px;
    }
  
    button {
      padding: 10px 20px;
      background-color: #4caf50;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
    }
  
    .entries {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
    }
  
    .entry {
      margin-bottom: 10px;
      padding: 10px;
      background-color: white;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
    }
  </style>
  