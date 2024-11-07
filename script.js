
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-07 04:00:00", "b": 559.2}, {"a": "2024-11-07 04:05:00", "b": 560.2}, {"a": "2024-11-07 04:10:00", "b": 531.0}, {"a": "2024-11-07 04:15:00", "b": 515.6}, {"a": "2024-11-07 04:20:00", "b": 530.0}, {"a": "2024-11-07 04:25:00", "b": 529.25}, {"a": "2024-11-07 04:30:00", "b": 521.0}, {"a": "2024-11-07 04:35:00", "b": 516.6}, {"a": "2024-11-07 04:40:00", "b": 517.2}, {"a": "2024-11-07 04:45:00", "b": 523.2}, {"a": "2024-11-07 04:50:00", "b": 534.2}, {"a": "2024-11-07 04:55:00", "b": 532.0}, {"a": "2024-11-07 05:00:00", "b": 536.6666666666666}, {"a": "2024-11-07 05:05:00", "b": 521.0}, {"a": "2024-11-07 05:10:00", "b": 530.5}, {"a": "2024-11-07 05:15:00", "b": 534.2}, {"a": "2024-11-07 05:20:00", "b": 531.6}, {"a": "2024-11-07 05:25:00", "b": 535.2}, {"a": "2024-11-07 05:30:00", "b": 523.6}, {"a": "2024-11-07 05:35:00", "b": 522.2}, {"a": "2024-11-07 05:40:00", "b": 514.0}, {"a": "2024-11-07 05:45:00", "b": 518.4}, {"a": "2024-11-07 05:50:00", "b": 516.25}, {"a": "2024-11-07 05:55:00", "b": 522.6}, {"a": "2024-11-07 06:00:00", "b": 540.4}, {"a": "2024-11-07 06:05:00", "b": 539.8}, {"a": "2024-11-07 06:10:00", "b": 544.0}, {"a": "2024-11-07 06:15:00", "b": 544.2}, {"a": "2024-11-07 06:20:00", "b": 556.2}, {"a": "2024-11-07 06:25:00", "b": 561.6}, {"a": "2024-11-07 06:30:00", "b": 550.75}, {"a": "2024-11-07 06:35:00", "b": 550.75}, {"a": "2024-11-07 06:40:00", "b": 567.4}, {"a": "2024-11-07 06:45:00", "b": 568.0}, {"a": "2024-11-07 06:50:00", "b": 562.8}, {"a": "2024-11-07 06:55:00", "b": 557.8}, {"a": "2024-11-07 07:00:00", "b": 575.0}, {"a": "2024-11-07 07:05:00", "b": 596.0}, {"a": "2024-11-07 07:10:00", "b": 619.25}, {"a": "2024-11-07 07:15:00", "b": 615.6}, {"a": "2024-11-07 07:20:00", "b": 617.2}, {"a": "2024-11-07 07:25:00", "b": 644.8}, {"a": "2024-11-07 07:30:00", "b": 652.4}, {"a": "2024-11-07 07:35:00", "b": 636.4}, {"a": "2024-11-07 07:40:00", "b": 629.5}, {"a": "2024-11-07 07:45:00", "b": 641.0}, {"a": "2024-11-07 07:50:00", "b": 651.0}, {"a": "2024-11-07 07:55:00", "b": 653.6}, {"a": "2024-11-07 08:00:00", "b": 666.2}, {"a": "2024-11-07 08:05:00", "b": 690.75}, {"a": "2024-11-07 08:10:00", "b": 695.0}, {"a": "2024-11-07 08:15:00", "b": 696.75}, {"a": "2024-11-07 08:20:00", "b": 699.5}, {"a": "2024-11-07 08:25:00", "b": 684.5}, {"a": "2024-11-07 08:30:00", "b": 691.5}, {"a": "2024-11-07 08:35:00", "b": 691.4}, {"a": "2024-11-07 08:40:00", "b": 678.0}, {"a": "2024-11-07 08:45:00", "b": 677.4}, {"a": "2024-11-07 08:50:00", "b": 664.6}, {"a": "2024-11-07 08:55:00", "b": 638.0}, {"a": "2024-11-07 09:00:00", "b": 631.6}, {"a": "2024-11-07 09:05:00", "b": 651.2}, {"a": "2024-11-07 09:10:00", "b": 659.0}, {"a": "2024-11-07 09:15:00", "b": 654.6}, {"a": "2024-11-07 09:20:00", "b": 639.2}, {"a": "2024-11-07 09:25:00", "b": 632.6}, {"a": "2024-11-07 09:30:00", "b": 620.0}, {"a": "2024-11-07 09:35:00", "b": 620.75}, {"a": "2024-11-07 09:40:00", "b": 611.25}, {"a": "2024-11-07 09:45:00", "b": 601.25}, {"a": "2024-11-07 09:50:00", "b": 596.0}, {"a": "2024-11-07 09:55:00", "b": 597.2}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    