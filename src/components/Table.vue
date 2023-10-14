<template lang="">
    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr class="fw-bold fs-6 text-gray-800">
                    <th>รหัสบัตร</th>
                    <th>ชื่อ</th>
                    <th>เวลาเข้า</th>
                    <th>เวลาออก</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{Datatime}}</td>
                    <td>{{Member}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
console.log('test');
export default {
    name:"table",
    computed: {
        console: () => console
    }
};
</script>
<style lang="">
    
</style>