
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-06 11:00:00", "b": 586.0}, {"a": "2025-01-06 11:05:00", "b": 592.2}, {"a": "2025-01-06 11:10:00", "b": 625.4}, {"a": "2025-01-06 11:15:00", "b": 672.0}, {"a": "2025-01-06 11:20:00", "b": 758.8}, {"a": "2025-01-06 11:25:00", "b": 610.4}, {"a": "2025-01-06 11:30:00", "b": 555.4}, {"a": "2025-01-06 11:35:00", "b": 548.5}, {"a": "2025-01-06 11:40:00", "b": 542.5}, {"a": "2025-01-06 11:45:00", "b": 545.25}, {"a": "2025-01-06 11:50:00", "b": 537.5}, {"a": "2025-01-06 11:55:00", "b": 526.2}, {"a": "2025-01-06 12:00:00", "b": 534.8}, {"a": "2025-01-06 12:05:00", "b": 514.6}, {"a": "2025-01-06 12:10:00", "b": 507.0}, {"a": "2025-01-06 12:15:00", "b": 518.8}, {"a": "2025-01-06 12:20:00", "b": 514.0}, {"a": "2025-01-06 12:25:00", "b": 509.5}, {"a": "2025-01-06 12:30:00", "b": 498.5}, {"a": "2025-01-06 12:35:00", "b": 504.8}, {"a": "2025-01-06 12:40:00", "b": 487.6666666666667}, {"a": "2025-01-06 12:45:00", "b": 484.2}, {"a": "2025-01-06 12:50:00", "b": 541.4}, {"a": "2025-01-06 12:55:00", "b": 584.0}, {"a": "2025-01-06 13:00:00", "b": 574.0}, {"a": "2025-01-06 13:05:00", "b": 608.8}, {"a": "2025-01-06 13:10:00", "b": 542.0}, {"a": "2025-01-06 13:15:00", "b": 529.6}, {"a": "2025-01-06 13:20:00", "b": 516.6}, {"a": "2025-01-06 13:25:00", "b": 507.25}, {"a": "2025-01-06 13:30:00", "b": 509.0}, {"a": "2025-01-06 13:35:00", "b": 514.2}, {"a": "2025-01-06 13:40:00", "b": 518.0}, {"a": "2025-01-06 13:45:00", "b": 664.2}, {"a": "2025-01-06 13:50:00", "b": 970.2}, {"a": "2025-01-06 13:55:00", "b": 865.0}, {"a": "2025-01-06 14:00:00", "b": 953.4}, {"a": "2025-01-06 14:05:00", "b": 611.0}, {"a": "2025-01-06 14:10:00", "b": 585.6}, {"a": "2025-01-06 14:15:00", "b": 571.25}, {"a": "2025-01-06 14:20:00", "b": 603.0}, {"a": "2025-01-06 14:25:00", "b": 643.6}, {"a": "2025-01-06 14:30:00", "b": 592.4}, {"a": "2025-01-06 14:35:00", "b": 614.4}, {"a": "2025-01-06 14:40:00", "b": 628.0}, {"a": "2025-01-06 14:45:00", "b": 650.8}, {"a": "2025-01-06 14:50:00", "b": 648.2}, {"a": "2025-01-06 14:55:00", "b": 689.2}, {"a": "2025-01-06 15:00:00", "b": 698.4}, {"a": "2025-01-06 15:05:00", "b": 683.4}, {"a": "2025-01-06 15:10:00", "b": 551.0}, {"a": "2025-01-06 15:15:00", "b": 645.6}, {"a": "2025-01-06 15:20:00", "b": 720.8}, {"a": "2025-01-06 15:25:00", "b": 799.4}, {"a": "2025-01-06 15:30:00", "b": 792.25}, {"a": "2025-01-06 15:35:00", "b": 814.6}, {"a": "2025-01-06 15:40:00", "b": 814.0}, {"a": "2025-01-06 15:45:00", "b": 846.0}, {"a": "2025-01-06 15:50:00", "b": 938.8}, {"a": "2025-01-06 15:55:00", "b": 933.8}, {"a": "2025-01-06 16:00:00", "b": 890.0}, {"a": "2025-01-06 16:05:00", "b": 919.4}, {"a": "2025-01-06 16:10:00", "b": 1024.5}, {"a": "2025-01-06 16:15:00", "b": 900.2}, {"a": "2025-01-06 16:20:00", "b": 1119.6}, {"a": "2025-01-06 16:25:00", "b": 920.4}, {"a": "2025-01-06 16:30:00", "b": 884.6}, {"a": "2025-01-06 16:35:00", "b": 909.8}, {"a": "2025-01-06 16:40:00", "b": 984.2}, {"a": "2025-01-06 16:45:00", "b": 1057.0}, {"a": "2025-01-06 16:50:00", "b": 1101.2}, {"a": "2025-01-06 16:55:00", "b": 1370.2}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    