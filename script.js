
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-10 13:00:00", "b": 401.5}, {"a": "2025-01-10 13:05:00", "b": 402.6}, {"a": "2025-01-10 13:10:00", "b": 402.8}, {"a": "2025-01-10 13:15:00", "b": 407.3333333333333}, {"a": "2025-01-10 13:20:00", "b": 405.75}, {"a": "2025-01-10 13:25:00", "b": 405.0}, {"a": "2025-01-10 13:30:00", "b": 404.2}, {"a": "2025-01-10 13:35:00", "b": 403.2}, {"a": "2025-01-10 13:40:00", "b": 404.0}, {"a": "2025-01-10 13:45:00", "b": 404.25}, {"a": "2025-01-10 13:50:00", "b": 403.3333333333333}, {"a": "2025-01-10 13:55:00", "b": 401.5}, {"a": "2025-01-10 14:00:00", "b": 402.75}, {"a": "2025-01-10 14:05:00", "b": 401.0}, {"a": "2025-01-10 14:10:00", "b": 403.0}, {"a": "2025-01-10 14:15:00", "b": 403.0}, {"a": "2025-01-10 14:20:00", "b": 402.5}, {"a": "2025-01-10 14:25:00", "b": 404.6666666666667}, {"a": "2025-01-10 14:30:00", "b": 407.0}, {"a": "2025-01-10 14:35:00", "b": 406.3333333333333}, {"a": "2025-01-10 14:40:00", "b": 404.0}, {"a": "2025-01-10 14:45:00", "b": 403.5}, {"a": "2025-01-10 14:50:00", "b": 406.5}, {"a": "2025-01-10 14:55:00", "b": 405.0}, {"a": "2025-01-10 15:00:00", "b": 405.0}, {"a": "2025-01-10 15:05:00", "b": 404.5}, {"a": "2025-01-10 15:10:00", "b": 405.5}, {"a": "2025-01-10 15:15:00", "b": 404.5}, {"a": "2025-01-10 15:20:00", "b": 403.5}, {"a": "2025-01-10 15:25:00", "b": 404.0}, {"a": "2025-01-10 15:30:00", "b": 403.3333333333333}, {"a": "2025-01-10 15:35:00", "b": 403.0}, {"a": "2025-01-10 15:40:00", "b": 402.25}, {"a": "2025-01-10 15:45:00", "b": 403.0}, {"a": "2025-01-10 15:50:00", "b": 403.5}, {"a": "2025-01-10 15:55:00", "b": 402.5}, {"a": "2025-01-10 16:00:00", "b": 412.0}, {"a": "2025-01-10 16:05:00", "b": 408.5}, {"a": "2025-01-10 16:10:00", "b": 401.75}, {"a": "2025-01-10 16:15:00", "b": 402.5}, {"a": "2025-01-10 16:20:00", "b": 403.6666666666667}, {"a": "2025-01-10 16:25:00", "b": 409.6}, {"a": "2025-01-10 16:30:00", "b": 427.5}, {"a": "2025-01-10 16:45:00", "b": 546.0}, {"a": "2025-01-10 16:50:00", "b": 563.6666666666666}, {"a": "2025-01-10 16:55:00", "b": 603.0}, {"a": "2025-01-10 17:00:00", "b": 618.3333333333334}, {"a": "2025-01-10 17:05:00", "b": 641.6}, {"a": "2025-01-10 17:10:00", "b": 666.0}, {"a": "2025-01-10 17:15:00", "b": 587.6}, {"a": "2025-01-10 17:20:00", "b": 604.0}, {"a": "2025-01-10 17:25:00", "b": 603.0}, {"a": "2025-01-10 17:30:00", "b": 606.4}, {"a": "2025-01-10 17:35:00", "b": 669.0}, {"a": "2025-01-10 17:40:00", "b": 697.25}, {"a": "2025-01-10 17:45:00", "b": 714.25}, {"a": "2025-01-10 17:50:00", "b": 730.0}, {"a": "2025-01-10 17:55:00", "b": 701.6}, {"a": "2025-01-10 18:00:00", "b": 704.0}, {"a": "2025-01-10 18:05:00", "b": 706.3333333333334}, {"a": "2025-01-10 18:10:00", "b": 697.0}, {"a": "2025-01-10 18:15:00", "b": 681.8}, {"a": "2025-01-10 18:20:00", "b": 676.4}, {"a": "2025-01-10 18:25:00", "b": 678.6}, {"a": "2025-01-10 18:30:00", "b": 659.4}, {"a": "2025-01-10 18:35:00", "b": 652.75}, {"a": "2025-01-10 18:40:00", "b": 653.4}, {"a": "2025-01-10 18:45:00", "b": 650.75}, {"a": "2025-01-10 18:50:00", "b": 650.4}, {"a": "2025-01-10 18:55:00", "b": 656.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    