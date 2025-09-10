import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, FileText, Settings, Upload, Database, Activity, TrendingUp } from "lucide-react";

const Index = () => {
  const [documents, setDocuments] = useState([
    { id: 1, name: "FAQ Produtos.pdf", size: "2.3 MB", chunks: 45, status: "Ativo" },
    { id: 2, name: "Manual de Atendimento.docx", size: "1.8 MB", chunks: 32, status: "Ativo" },
    { id: 3, name: "Políticas da Empresa.md", size: "0.9 MB", chunks: 18, status: "Processando" }
  ]);

  const stats = {
    totalMessages: 1247,
    successRate: 94.2,
    avgResponseTime: "1.2s",
    documentsActive: 3
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <MessageSquare className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold text-foreground">WhatsApp RAG Bot</h1>
                <p className="text-sm text-muted-foreground">Sistema de Atendimento Inteligente</p>
              </div>
            </div>
            <Badge variant="outline" className="text-green-600 border-green-200">
              ● Sistema Ativo
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Mensagens Hoje</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalMessages}</div>
              <p className="text-xs text-muted-foreground">+12% em relação a ontem</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Taxa de Sucesso</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.successRate}%</div>
              <p className="text-xs text-muted-foreground">+2.1% esta semana</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tempo Médio</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.avgResponseTime}</div>
              <p className="text-xs text-muted-foreground">Última hora</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Documentos</CardTitle>
              <Database className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.documentsActive}</div>
              <p className="text-xs text-muted-foreground">Base de conhecimento</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="documents" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="documents" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Documentos
            </TabsTrigger>
            <TabsTrigger value="monitoring" className="flex items-center gap-2">
              <Activity className="h-4 w-4" />
              Monitoramento
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Configurações
            </TabsTrigger>
          </TabsList>

          <TabsContent value="documents" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Gerenciamento de Documentos</CardTitle>
                <CardDescription>
                  Upload e gerenciamento da base de conhecimento do chatbot
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center mb-6">
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">Upload de Documentos</h3>
                  <p className="text-muted-foreground mb-4">
                    Arraste arquivos aqui ou clique para selecionar
                  </p>
                  <Button>Selecionar Arquivos</Button>
                  <p className="text-xs text-muted-foreground mt-2">
                    Suporte para PDF, DOCX, TXT, MD - Máximo 10MB por arquivo
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Documentos Ativos</h4>
                  {documents.map((doc) => (
                    <div key={doc.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <FileText className="h-8 w-8 text-primary" />
                        <div>
                          <h5 className="font-medium">{doc.name}</h5>
                          <p className="text-sm text-muted-foreground">
                            {doc.size} • {doc.chunks} chunks processados
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge variant={doc.status === "Ativo" ? "default" : "secondary"}>
                          {doc.status}
                        </Badge>
                        <Button variant="outline" size="sm">Remover</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="monitoring" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Conversas Recentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-3 border rounded">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">+55 11 99999-1234</p>
                        <p className="text-sm text-muted-foreground">Como faço para cancelar meu pedido?</p>
                        <p className="text-xs text-muted-foreground">Há 2 minutos • Resolvida</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 border rounded">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">+55 11 88888-5678</p>
                        <p className="text-sm text-muted-foreground">Qual o prazo de entrega para SP?</p>
                        <p className="text-xs text-muted-foreground">Há 5 minutos • Em andamento</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 border rounded">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">+55 11 77777-9012</p>
                        <p className="text-sm text-muted-foreground">Preciso falar com um atendente</p>
                        <p className="text-xs text-muted-foreground">Há 8 minutos • Escalada</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Métricas em Tempo Real</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Taxa de Resposta Automática</span>
                        <span>94.2%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "94.2%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Satisfação do Cliente</span>
                        <span>87.8%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "87.8%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Tempo Médio de Resposta</span>
                        <span>1.2s</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Configurações da API</CardTitle>
                  <CardDescription>
                    Configure as chaves de acesso para OpenAI e WhatsApp
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="openai-key">Chave da OpenAI</Label>
                    <Input 
                      id="openai-key" 
                      type="password" 
                      placeholder="sk-..." 
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="whatsapp-token">Token do WhatsApp</Label>
                    <Input 
                      id="whatsapp-token" 
                      type="password" 
                      placeholder="EAA..." 
                      className="mt-1"
                    />
                  </div>
                  <Button className="w-full">Salvar Configurações</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Mensagens do Sistema</CardTitle>
                  <CardDescription>
                    Configure as mensagens automáticas do chatbot
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="welcome-msg">Mensagem de Boas-vindas</Label>
                    <Textarea 
                      id="welcome-msg" 
                      placeholder="Olá! Como posso ajudá-lo hoje?"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="fallback-msg">Mensagem de Fallback</Label>
                    <Textarea 
                      id="fallback-msg" 
                      placeholder="Desculpe, não encontrei informações sobre isso. Um atendente entrará em contato."
                      className="mt-1"
                    />
                  </div>
                  <Button className="w-full">Salvar Mensagens</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;