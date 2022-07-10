class ValueInvesting
      attr_accessor :lpa, :vpa
      def calcular_preco_acao
          puts "Qual a cotação atual da ação...?"
          @cotacao = gets.chomp.to_f
          puts "Digite o valor do LPA..."
          @lpa = gets.chomp.to_f
          puts "Digite o valor do VPA..."
     	@vpa = gets.chomp.to_f
          @valor_intrinseco = Math::sqrt((22.5 * @lpa * @vpa))
         
         if(@cotacao > @valor_intrinseco)
           puts "Está ação está com valor ACIMA do esperado."
           puts "O valor intrínseco da ação calculado foi, R$#{@valor_intrinseco.round(2)}." 
           puts "Se for vendida a preço justo, essa ação pode ter uma queda de até #{calcular_percentual.round(2)}% "
         else
           puts "Está ação está DESCONTADA."
           puts "O valor intrínseco da ação calculado foi, R$#{@valor_intrinseco.round(2)}."
           puts "Ou seja, está ação pode valorizar em até #{calcular_percentual.round(2)}%"
         end
      end

      def calcular_percentual

       (@valor_intrinseco - @cotacao)*100 / @cotacao
        
      end
 end

valor_acao = ValueInvesting.new
puts @valor_intrinseco = valor_acao.calcular_preco_acao
