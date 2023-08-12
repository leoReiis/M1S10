<template>
  <form class="main-form" @submit.prevent="handleSubmit">
    <h1>Cadastro de talento</h1>
    <br>

    <span class="form-container">
      <div class="form-item">
        <label for="name">Nome completo</label>
        <input id="name" v-model="name">
        {{ this.errors.name }}
      </div>

      <div class="form-item">
        <label for="email">Email </label>
        <input type="email" id="email" v-model="email">
        {{ this.errors.email }}
      </div>
    </span>

    <span class="form-container">
      <div class="form-item">
        <label for="birth-date">Data de nascimento</label>
        <input type="date" id="birth-date" v-model='birthDate'>
      </div>

      <div class="form-item">
        <label for="phone">Whatsapp </label>
        <input type="text" id="phone" v-model="phone">
      </div>
    </span>

    <span class="form-item">
      <label for="area">Area de interesse</label>
      <select v-model="area">
        <option value="backend">Backend</option>
        <option value="frontend">Frontend</option>
        <option value="fullstack">Fullstack</option>
      </select>
    </span>
    {{ this.errors.area }}

    <span class="form-item">
      <label for="nivel">Nivel</label>
      <select v-model="nivel">
        <option value="junior">Junior</option>
        <option value="pleno">Pleno</option>
        <option value="senior">Senior</option>
      </select>
    </span>


    <p>Selecione suas habilidades</p>

    <div v-if="area === 'frontend' || area === 'fullstack'" class="form-container">
      <label><input type="checkbox" v-model="skills" value="HTML" />HTML</label>
      <label><input type="checkbox" v-model="skills" value="CSS" /> CSS</label>
      <label><input type="checkbox" v-model="skills" value="JAVASCRIPT" /> JAVASCRIPT</label>
      <label><input type="checkbox" v-model="skills" value="VUE" /> VUE</label>
    </div>

    <div v-if="area === 'backend' || area === 'fullstack'" class="form-container">
      <label><input type="checkbox" v-model="skills" value="NODE" />NODE</label>
      <label> <input type="checkbox" v-model="skills" value="PHP" /> PHP</label>
      <label><input type="checkbox" v-model="skills" value="LARAVEL" /> LARAVEL</label>
      <label><input type="checkbox" v-model="skills" value="JAVA" /> JAVA</label>
    </div>

    <span class="form-item">
      <label>Carta de apresentacao</label>
      <textarea id="text-area" v-model="apresentacao"></textarea>
    </span>

    <button type="submit">Cadastrar</button>

  </form>
</template>


<script>
import * as yup from 'yup'
import { captureErrorYup } from '../../utils/captureErroYup'


export default {
  data() {
    return {
      skills: [],
      area: 'backend',
      nivel: '',
      apresentacao: '',
      phone: '',
      birthDate: '',
      email: '',
      name: '',
      errors: {}

    }
  },

  methods: {

    handleSubmit() {
      try {
        const schema = yup.object().shape({
          name: yup.string().required('O nome é obrigatório').min(10, 'O tamanho mínimo do nome é 10 caracteres'),
          email: yup.string().email('Email inválido').required('Email é obrigatório'),
          area: yup.string().required('Campo área é obrigatório')
        })

        schema.validateSync({
          name: this.name,
          email: this.email,
          area: this.area
        }, { abortEarly: false }
        )

      } catch (error) {
        if (error instanceof yup.ValidationError) {
          debugger
          this.errors = captureErrorYup(error)
        }
      }
    }
  },

  watch: {
    area(newValue, oldvalue) {
      if (newValue !== oldvalue) {
        this.skills = []
      }
    }
  }
}
</script>

<style scoped>
.main-form {
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  gap: 15px;
}

.form-item {
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 80px;
}

.form-item input {
  height: 25px;
  border-radius: 4px;
}

.form-container {
  display: flex;
  width: 80%;
  gap: 40px;
  justify-content: space-between;
}

button {
  height: 40px;
  width: 200px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  background-color: #A5D1FE;
  cursor: pointer;
}

#text-area {
  height: 200px;
}
</style>