<template><div class="q-pa-md" >
    <q-card class="q-pa-md" ><q-btn label="刷新" color="primary" icon="refresh" class=" q-mr-md" >
<div class="text-h2 text-h1" ></div></q-btn>
      
      <q-btn color="secondary" label="新增" icon="add" @click="handleNew" class="q-mr-md" ></q-btn>
      <q-btn color="purple" label="修改" icon="update" @click="handleUpdate" class="q-mr-md" ></q-btn>
      <q-btn color="purple" label="标记删除" icon="delete" @click="handleDeleteSign" class="q-mr-md" ></q-btn>
      <q-btn color="red" label="删除" icon="delete" @click="handleDelete" class="q-mr-md" ></q-btn>
    

<q-btn size="16px" label="点击按钮" color="red" icon="email" class="text-primary" ></q-btn>
<q-btn size="16px" label="点击按钮" icon="map" class="" ></q-btn>
<div class="text-h2 text-h3" ></div>
<div class="text-right text-left"></div></q-card>
    <q-card class="q-mt-md" >
      <q-table :rows="rows" :columns="columns" hide-pagination="" v-model:selected="selected" selection="multiple" row-key="id" :rows-per-page-options="[10, 20]" class="" >
        <template v-slot:top="prop" >
          <q-input filled="" dense="" label="搜索内容" class="q-mr-md" ></q-input>
          <q-btn flat="" icon="search" color="primary" class="" ></q-btn>
        </template>
        <template v-slot:bottom="" >
          <span v-if="selected.length > 0" >已选择{{ selected.length }}项</span>
          <q-space ></q-space>
          <span class="q-mr-md" >共{{ page.total }}条</span>
          <div >
            <span class="q-mr-md " >行数 {{ page.pageSize }}
              <q-btn-dropdown color="primary" flat="" label="" size="md" dense="" :ripple="false" >
                <q-list >
                  <q-item clickable="" v-close-popup="" @click="()=>{page.pageSize=10;}" >
                    <q-item-section >
                      <q-item-label >10</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable="" v-close-popup="" @click="()=>{page.pageSize=15;}" >
                    <q-item-section >
                      <q-item-label >15</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable="" v-close-popup="" @click="()=>{page.pageSize=20;}" >
                    <q-item-section >
                      <q-item-label >20</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </span>
          </div>
          <q-pagination v-model="page.currentPage" :max="Math.ceil(page.total/page.pageSize)" input="" @update:model-value="loadPage" >
          </q-pagination>

        </template>
      </q-table>

      <div class="" ></div>
    </q-card>

    <q-dialog v-model="saveDialog" position="right" full-height="" class="" >
      <q-card class="q-pa-sm min-w-[400px]" >
        <q-card-section class="row items-center" >
          <div class="text-h6" >{{ dialogTitle }}</div>
          <q-space class="" ></q-space>
          <q-btn icon="close" flat="" class="" ></q-btn>
        </q-card-section>

        <q-card-section class="q-pa-md" >
          <q-input v-model="saveForm.description" label="描述" placeholder="描述" >
          </q-input>
        </q-card-section>
        <q-card-section class="q-pa-md" >
          <q-input v-model="saveForm.name" label="名称" placeholder="名称" >
          </q-input>
        </q-card-section>
        <q-card-section class="q-pa-md" >
          <q-select :options="[{label:'前端',value:1},{label:'后端',value:2}]" v-model="saveForm.type" clearable="" label="类型" placeholder="类型" >

          </q-select>
        </q-card-section>

        <q-card-section class="text-primary" >
          <div class="row justify-between" >
            <div class="col" >
              <!-- <q-btn color="primary" class="text-left" label="取消" v-close-popup @click="handleCancel" /> -->
              <q-btn flat="" color="red" label="重置" @click="ResetForm(saveForm)" >
              </q-btn>
            </div>
            <div class="col text-right" >
              <q-btn color="primary" label="提交" v-close-popup="" @click="save" >
              </q-btn>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>

</template><script setup lang="ts">
import {ref} from "vue"

const rows :any = ref([{"id":"id0","description":"description0","name":"name0","type":"type0","updatedAt":"updatedAt0"},{"id":"id1","description":"description1","name":"name1","type":"type1","updatedAt":"updatedAt1"}]);
const columns :any = [{"name":"id","align":"center","required":false,"sortable":false,"label":"id","field":"id"},{"name":"description","align":"center","required":false,"sortable":false,"label":"描述","field":"description"},{"name":"name","align":"center","required":false,"sortable":false,"label":"名称","field":"name"},{"name":"type","align":"center","required":false,"sortable":false,"label":"类型  0-前端 1-后端","field":"type"},{"name":"updatedAt","align":"center","required":false,"sortable":false,"label":"updatedAt","field":"updatedAt"}];
const page :any = ref({
  "currentPage": 1,
  "pageSize": 15,
  "total": 1,
});
const saveDialog :any = ref(false);
const selected :any = ref([]);
const saveForm :any = ref({
  "description": "",
  "id": "",
  "name": "",
  "type": "",
});

function loadPage(){
  
}

function handleUpdate(){
  
}

function handleNew(){
  saveDialog.value = true
}

function handleReset(){
  
}

function save(){
  
}

function handleDeleteSign(){
  
}

function handleDelete(){
  
}

</script>