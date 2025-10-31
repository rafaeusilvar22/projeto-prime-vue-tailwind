<template>
  <div class="w-full mx-auto p-4 md:p-6">
    <div class="mb-6">
      <h2 class="text-2xl font-semibold mb-2">Central de Ajuda</h2>
      <p class="text-surface-600 dark:text-surface-400">
        Encontre respostas para suas dúvidas ou entre em contato conosco
      </p>
    </div>
    <Card class="mb-4">
      <template #content>
        <div class="flex gap-2">
          <IconField iconPosition="left" class="flex-1">
            <InputIcon class="pi pi-search" />
            <InputText v-model="searchQuery" placeholder="Buscar por ajuda..." class="w-full" />
          </IconField>
          <Button label="Buscar" icon="pi pi-search" />
        </div>
      </template>
    </Card>
    <div class="mb-6">
      <h3 class="text-xl font-semibold mb-4">Perguntas Frequentes</h3>
      <Accordion :value="['0']">
        <AccordionPanel value="0">
          <AccordionHeader>Como redefinir minha senha?</AccordionHeader>
          <AccordionContent>
            <p class="text-surface-600 dark:text-surface-400 leading-relaxed">
              Para redefinir sua senha, vá até a página de login e clique em "Esqueci minha senha".
              Você receberá um email com instruções para criar uma nova senha. O link é válido por
              24 horas.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="1">
          <AccordionHeader>Como ativar a autenticação de dois fatores?</AccordionHeader>
          <AccordionContent>
            <p class="text-surface-600 dark:text-surface-400 leading-relaxed">
              Acesse Configurações > Conta > Senha e autenticação. Ative o toggle "Autenticação de
              dois fatores" e siga as instruções para configurar usando um aplicativo autenticador
              como Google Authenticator ou Authy.
            </p>
          </AccordionContent>
        </AccordionPanel>

        <AccordionPanel value="2">
          <AccordionHeader>Como alterar meu email?</AccordionHeader>
          <AccordionContent>
            <p class="text-surface-600 dark:text-surface-400 leading-relaxed">
              Vá para Configurações > Conta > Informações pessoais. Clique em "Editar" e altere seu
              email. Você precisará verificar o novo email antes que a alteração seja concluída.
            </p>
          </AccordionContent>
        </AccordionPanel>

        <AccordionPanel value="3">
          <AccordionHeader>Como excluir minha conta?</AccordionHeader>
          <AccordionContent>
            <p class="text-surface-600 dark:text-surface-400 leading-relaxed mb-3">
              Para excluir sua conta permanentemente, acesse Configurações > Conta > Zona de perigo.
              Clique em "Excluir conta" e confirme a ação. Esta ação é irreversível e todos os seus
              dados serão perdidos.
            </p>
            <Message severity="warn" :closable="false">
              Atenção: A exclusão da conta é permanente e não pode ser desfeita.
            </Message>
          </AccordionContent>
        </AccordionPanel>

        <AccordionPanel value="4">
          <AccordionHeader>Como reportar um problema?</AccordionHeader>
          <AccordionContent>
            <p class="text-surface-600 dark:text-surface-400 leading-relaxed">
              Você pode reportar problemas através do formulário de contato abaixo ou enviando um
              email para suporte@exemplo.com. Nossa equipe responderá em até 24 horas úteis.
            </p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
    <div class="mb-6">
      <h3 class="text-xl font-semibold mb-4">Categorias</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card class="cursor-pointer hover:shadow-lg transition-shadow">
          <template #content>
            <div class="flex items-center gap-3">
              <div
                class="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center"
              >
                <i class="pi pi-user text-blue-600 dark:text-blue-400 text-2xl"></i>
              </div>
              <div>
                <h4 class="font-semibold mb-1">Conta e Perfil</h4>
                <p class="text-sm text-surface-600 dark:text-surface-400">
                  Gerenciamento de conta e dados pessoais
                </p>
              </div>
            </div>
          </template>
        </Card>
        <Card class="cursor-pointer hover:shadow-lg transition-shadow">
          <template #content>
            <div class="flex items-center gap-3">
              <div
                class="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center"
              >
                <i class="pi pi-shield text-green-600 dark:text-green-400 text-2xl"></i>
              </div>
              <div>
                <h4 class="font-semibold mb-1">Segurança</h4>
                <p class="text-sm text-surface-600 dark:text-surface-400">
                  Senha, autenticação e privacidade
                </p>
              </div>
            </div>
          </template>
        </Card>
        <Card class="cursor-pointer hover:shadow-lg transition-shadow">
          <template #content>
            <div class="flex items-center gap-3">
              <div
                class="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center"
              >
                <i class="pi pi-cog text-purple-600 dark:text-purple-400 text-2xl"></i>
              </div>
              <div>
                <h4 class="font-semibold mb-1">Configurações</h4>
                <p class="text-sm text-surface-600 dark:text-surface-400">
                  Preferências e personalização
                </p>
              </div>
            </div>
          </template>
        </Card>

        <Card class="cursor-pointer hover:shadow-lg transition-shadow">
          <template #content>
            <div class="flex items-center gap-3">
              <div
                class="w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center"
              >
                <i
                  class="pi pi-exclamation-triangle text-orange-600 dark:text-orange-400 text-2xl"
                ></i>
              </div>
              <div>
                <h4 class="font-semibold mb-1">Problemas Técnicos</h4>
                <p class="text-sm text-surface-600 dark:text-surface-400">
                  Erros e dificuldades técnicas
                </p>
              </div>
            </div>
          </template>
        </Card>
      </div>
    </div>
    <Card>
      <template #title>
        <span class="text-lg">Ainda precisa de ajuda?</span>
      </template>
      <template #content>
        <p class="text-surface-600 dark:text-surface-400 mb-4">
          Entre em contato com nossa equipe de suporte
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button
            label="Email"
            icon="pi pi-envelope"
            severity="secondary"
            outlined
            class="justify-center"
          />
          <Button
            label="Chat ao vivo"
            icon="pi pi-comments"
            severity="secondary"
            outlined
            class="justify-center"
          />
          <Button
            label="WhatsApp"
            icon="pi pi-whatsapp"
            severity="success"
            outlined
            class="justify-center"
          />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineOptions({ name: 'HelpView' })

const searchQuery = ref('')
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}

.transition-shadow {
  transition: box-shadow 0.3s ease;
}
</style>
