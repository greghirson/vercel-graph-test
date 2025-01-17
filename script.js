
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-17 05:00:00", "b": 502.2}, {"a": "2025-01-17 05:05:00", "b": 512.0}, {"a": "2025-01-17 05:10:00", "b": 510.2}, {"a": "2025-01-17 05:15:00", "b": 503.0}, {"a": "2025-01-17 05:20:00", "b": 501.4}, {"a": "2025-01-17 05:25:00", "b": 513.0}, {"a": "2025-01-17 05:30:00", "b": 533.75}, {"a": "2025-01-17 05:35:00", "b": 539.25}, {"a": "2025-01-17 05:40:00", "b": 532.2}, {"a": "2025-01-17 05:45:00", "b": 529.6666666666666}, {"a": "2025-01-17 05:50:00", "b": 526.2}, {"a": "2025-01-17 05:55:00", "b": 534.8}, {"a": "2025-01-17 06:00:00", "b": 536.3333333333334}, {"a": "2025-01-17 06:05:00", "b": 542.75}, {"a": "2025-01-17 06:10:00", "b": 529.4}, {"a": "2025-01-17 06:15:00", "b": 541.2}, {"a": "2025-01-17 06:20:00", "b": 526.0}, {"a": "2025-01-17 06:25:00", "b": 544.4}, {"a": "2025-01-17 06:30:00", "b": 566.2}, {"a": "2025-01-17 06:35:00", "b": 568.8}, {"a": "2025-01-17 06:40:00", "b": 577.0}, {"a": "2025-01-17 06:45:00", "b": 591.6}, {"a": "2025-01-17 06:50:00", "b": 591.75}, {"a": "2025-01-17 06:55:00", "b": 587.0}, {"a": "2025-01-17 07:00:00", "b": 592.5}, {"a": "2025-01-17 07:05:00", "b": 604.4}, {"a": "2025-01-17 07:10:00", "b": 601.25}, {"a": "2025-01-17 07:15:00", "b": 602.4}, {"a": "2025-01-17 07:20:00", "b": 596.4}, {"a": "2025-01-17 07:25:00", "b": 608.8}, {"a": "2025-01-17 07:30:00", "b": 663.2}, {"a": "2025-01-17 07:35:00", "b": 685.4}, {"a": "2025-01-17 07:40:00", "b": 682.5}, {"a": "2025-01-17 07:45:00", "b": 707.6}, {"a": "2025-01-17 07:50:00", "b": 738.75}, {"a": "2025-01-17 07:55:00", "b": 756.4}, {"a": "2025-01-17 08:00:00", "b": 762.0}, {"a": "2025-01-17 08:05:00", "b": 713.8}, {"a": "2025-01-17 08:10:00", "b": 698.4}, {"a": "2025-01-17 08:15:00", "b": 687.8}, {"a": "2025-01-17 08:20:00", "b": 704.5}, {"a": "2025-01-17 08:25:00", "b": 699.3333333333334}, {"a": "2025-01-17 08:30:00", "b": 707.25}, {"a": "2025-01-17 08:35:00", "b": 719.2}, {"a": "2025-01-17 08:40:00", "b": 741.0}, {"a": "2025-01-17 08:45:00", "b": 719.25}, {"a": "2025-01-17 08:50:00", "b": 707.75}, {"a": "2025-01-17 08:55:00", "b": 717.75}, {"a": "2025-01-17 09:00:00", "b": 725.2}, {"a": "2025-01-17 09:05:00", "b": 691.5}, {"a": "2025-01-17 09:10:00", "b": 665.0}, {"a": "2025-01-17 09:15:00", "b": 667.0}, {"a": "2025-01-17 09:20:00", "b": 667.25}, {"a": "2025-01-17 09:25:00", "b": 665.75}, {"a": "2025-01-17 09:30:00", "b": 677.0}, {"a": "2025-01-17 09:35:00", "b": 667.6666666666666}, {"a": "2025-01-17 09:40:00", "b": 668.0}, {"a": "2025-01-17 09:45:00", "b": 669.5}, {"a": "2025-01-17 09:50:00", "b": 670.0}, {"a": "2025-01-17 09:55:00", "b": 672.25}, {"a": "2025-01-17 10:00:00", "b": 674.2}, {"a": "2025-01-17 10:05:00", "b": 672.8}, {"a": "2025-01-17 10:10:00", "b": 700.8}, {"a": "2025-01-17 10:15:00", "b": 689.8}, {"a": "2025-01-17 10:20:00", "b": 676.4}, {"a": "2025-01-17 10:25:00", "b": 685.2}, {"a": "2025-01-17 10:30:00", "b": 670.8}, {"a": "2025-01-17 10:35:00", "b": 666.6}, {"a": "2025-01-17 10:40:00", "b": 632.0}, {"a": "2025-01-17 10:45:00", "b": 642.8}, {"a": "2025-01-17 10:50:00", "b": 635.0}, {"a": "2025-01-17 10:55:00", "b": 627.2}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    