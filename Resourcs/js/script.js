<script type="text/javascript">
        $document.getElementById('button1').addEventListener('click',
            function(){
                document.querySelector('.bg-modal').style.display='flex';
        });
        document.querySelector('.close').addEventListener('click',
            function(){
                document.querySelector('.bg-modal').style.display='none';
        });
</script>