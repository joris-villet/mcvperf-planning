<template>
  <div class="right-sidebar">
  <nav>
    <ul>
      <li><i class="fas fa-car"></i></li>
      <li><i class="fas fa-car-crash"></i></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </nav>
</div>
</template>

<script>
export default {
  name: 'SidebarCar'
}
</script>

<style scoped>
  .right-sidebar {
		min-height: 100vh;
		background: rgb(73,128,246);
		background: linear-gradient(90deg, rgba(73,128,246,1) 0%, rgba(56,65,249,1) 80%); 
    box-shadow: 4px 0px 4px rgb(0,0,0,0.3);
	}

  ul {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    margin-top: 1rem;
  }

  li {
    margin: 1.5rem auto;
  }

  i {
    font-size: 3rem;
    color: rgb(197, 197, 197);
    cursor: pointer;
    opacity: .7;
  }

  i:hover {
    color: #fff;
    opacity: 1;
  }
</style>